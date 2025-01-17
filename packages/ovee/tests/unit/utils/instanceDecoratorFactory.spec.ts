import * as protectedFields from 'src/core/protectedFields';
import { instanceDecoratorDestructor } from 'src/utils/instanceDecoratorDestructor';
import { instanceDecoratorFactory } from 'src/utils/instanceDecoratorFactory';

jest.mock('src/utils/instanceDecoratorDestructor');

describe('instanceDecoratorFactory function', () => {
	it('should produce a proper decorator structure', () => {
		const product = instanceDecoratorFactory(jest.fn());
		const decorator = product();

		expect(product).toBeInstanceOf(Function);
		expect(decorator).toBeInstanceOf(Function);
	});

	it('should create an ampty array for decorators on prototype.constructor if it does not exist', () => {
		const decorator = instanceDecoratorFactory(jest.fn());
		class T {
			@decorator()
			foo: any;
		}

		expect(
			Array.isArray((T.prototype.constructor as any)[protectedFields.INSTANCE_DECORATORS])
		).toBeTruthy();
	});

	it('should ensure that instance decorators are properly bound to constructors in case of inheritance', () => {
		const decorator = instanceDecoratorFactory(jest.fn())();
		class Base {
			@decorator
			foo: any;
		}
		class Extended extends Base {
			@decorator
			bar: any;
		}

		const baseDecorators = (Base.prototype.constructor as any)[protectedFields.INSTANCE_DECORATORS];
		const extendedDecorators = (Extended.prototype.constructor as any)[
			protectedFields.INSTANCE_DECORATORS
		];

		expect(Array.isArray(baseDecorators)).toBeTruthy();
		expect(Array.isArray(extendedDecorators)).toBeTruthy();
		expect(baseDecorators.length).toBe(1);
		expect(extendedDecorators.length).toBe(1);
		expect(baseDecorators[0]).not.toBe(extendedDecorators[1]);
	});

	it('should push callback into instanceDecorators array', () => {
		const decorator = instanceDecoratorFactory(jest.fn());
		class T {
			@decorator()
			foo: any;
		}

		expect((T.prototype.constructor as any)[protectedFields.INSTANCE_DECORATORS].length).toBe(1);
		expect((T.prototype.constructor as any)[protectedFields.INSTANCE_DECORATORS][0]).toBeInstanceOf(
			Function
		);
	});

	it('should call callback with proper parameters', () => {
		const prop = 'foo';
		const dummyArg = 'bar';
		const callback = jest.fn();
		const decorator = instanceDecoratorFactory(callback);
		class T {
			@decorator(dummyArg)
			foo: any;
		}
		const instance = new T();
		const proto = Object.getPrototypeOf(instance);

		(T.prototype.constructor as any)[protectedFields.INSTANCE_DECORATORS][0](instance);

		expect(callback.mock.calls.length).toBe(1);
		expect(callback.mock.calls[0][0].instance).toBe(instance);
		expect(callback.mock.calls[0][0].proto).toBe(proto);
		expect(callback.mock.calls[0][0].addDestructor).toBeInstanceOf(Function);
		expect(callback.mock.calls[0][1]).toBe(prop);
		expect(callback.mock.calls[0][2]).toBe(dummyArg);
	});

	it(`should allow to add destructor via 'addDestructor' argument
        with usage of 'instanceDecoratorDestructor'`, () => {
		const callback = jest.fn();
		const decorator = instanceDecoratorFactory(({ addDestructor }) => {
			addDestructor(callback);
		});
		class T {
			@decorator()
			foo: any;
		}
		const instance = new T();

		(T.prototype.constructor as any)[protectedFields.INSTANCE_DECORATORS][0](instance);

		expect(instanceDecoratorDestructor).toBeCalledTimes(1);
		expect((instanceDecoratorDestructor as jest.Mock).mock.calls[0][1]).toBe(callback);
	});
});
