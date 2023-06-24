export async function createApiKey() {
  const res = await fetch("/api/api-key/create");
  console.log("new hello");
  const data = await res.json();

  if (data.error || !data.createdApiKey) {
    if (data.error instanceof Array) {
      throw new Error(data.error.join(", "));
    }
    throw new Error(data.error ?? "Something went wrong");
  }

  return data.createdApiKey.key;
}
