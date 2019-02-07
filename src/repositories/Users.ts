import { createRepository, Pipe } from 'fewer';
import bcrypt from 'bcrypt';
import schema from '../schema';
import { confirmation } from '@fewer/validations';

// TODO: Extract to fewer package:
type StringPropertyNames<T> = Exclude<
  {
    [K in keyof T]: Exclude<T[K], undefined> extends string ? K : never
  }[keyof T],
  undefined
>;

function passwordHashPipe<
  Instance,
  Virtual extends string,
  Hashed extends StringPropertyNames<Instance>
>(
  virtualField: Virtual,
  hashedField: Hashed,
  saltRounds: number = 12,
): Pipe<
  Instance,
  { [P in Virtual]?: string } & {
    authenticate(passwordToCheck: string): Promise<boolean>;
  }
> {
  return {
    async use(instance) {
      if (instance[virtualField]) {
        // @ts-ignore: This is not working for some reason:
        instance[hashedField] = await bcrypt.hash(
          instance[virtualField],
          saltRounds,
        );
      }
    },
    prepare(instance) {
      // @ts-ignore: This is not working for some reason:
      instance.authenticate = async (password: string) => {
        if (!instance[hashedField]) {
          throw new Error(
            `The hashed field "${hashedField}" was not present, can not authenticate`,
          );
        }

        return await bcrypt.compare(password, instance[hashedField] as string);
      };
    },
  };
}

export default createRepository(schema.tables.users)
  .pipe(passwordHashPipe('password', 'password_hash'))
  .pipe(confirmation('password', 'password_confirmation'));
