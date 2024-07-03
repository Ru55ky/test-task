import type {Ref} from "vue";

type CustomRefFactory<T> = (
	track: () => void,
	trigger: () => void
) => {
	get: () => T
	set: (value: T) => void
}

function customRef<T>(factory: CustomRefFactory<T>): Ref<T>

export function useDebouncedRef(value: string, delay: number = 300) {
	let timeout: ReturnType<typeof setTimeout>

	return customRef((track, trigger)=> {
		return {
			get() {
				track()
				return value
			},
			set(newValue: string):void {
				clearTimeout(timeout)
				timeout = setTimeout(() => {
					value = newValue
					trigger()
				}, delay)
			}
		}
	})
}
