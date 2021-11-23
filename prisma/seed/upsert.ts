interface UpsertData<T, U> {
  where: {
    id: U;
  };
  update: {};
  create: T;
}

type UpsertFn<T, U, V> = (data: UpsertData<T, U>) => Promise<V>;

export async function insertIfNotExists<T, U, V>(
  fn: UpsertFn<T, U, V>,
  data: T & { id: U }
): Promise<V> {
  return fn({
    where: {
      id: data.id,
    },
    update: {},
    create: data,
  });
}

export async function insertAllIfNotExists<T, U, V>(
  fn: UpsertFn<T, U, V>,
  data: (T & { id: U })[]
): Promise<V[]> {
  return data.reduce<Promise<V[]>>(async (resultsPromise, rowData) => {
    const results = await resultsPromise;

    results.push(await insertIfNotExists(fn, rowData));

    return results;
  }, Promise.resolve([]));
}
