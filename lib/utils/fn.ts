export async function tryCatch<T extends ReturnType<any>>(callback: () => Promise<T>): Promise<{ result: T, error: Error | null } | { result: T | null, error: Error }> {
  try {
    const result = await callback();
    return { result, error: null };
  } catch (error: any) {
    return { result: null, error };
  }
}
