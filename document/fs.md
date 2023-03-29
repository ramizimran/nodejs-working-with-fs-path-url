# NodeJs File system | Promise Api

## FileHandle

A `<FileHandle>`object is an object wrapper for a numeric file descriptor.
Instances of the `<FileHandle>` object are created by the `fsPromises.open()` method.
All `<FileHandle>` objects are `<EventEmitter>`s.

### `open(path, flags[, mode])` & `close()`

- path `<string>` |`<Buffer>` | `<URL>`
- flags <string> | <number> See support of file system flags. Default: `'r'`.
  - `'r'`: Open file for reading. An exception occurs if the file does not exist.
  - `'r+`': Open file for reading and writing. An exception occurs if the file does not exist.
  - `'w'`: Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
  - `'wx'`: Like `'w'` but fails if the path exists.
  - `'w+'`: Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
  - `'a'`: Open file for appending. The file is created if it does not exist.
  - `'ax'`: Like `'a'` but fails if the path exists.
  - `'a+'`: Open file for reading and appending. The file is created if it does not exist.
  - `'ax+'`: Like `'a+'` but fails if the path exists.
- Returns: `<Promise>` Fulfills with a `<FileHandle>`object.

```javascript
const FILE_PATH = "../document/doc.md";
try {
  const file = await fs.open(FILE_PATH, "r");
  console.log(file);
  file.close();
} catch (error) {
  console.log(error);
}

// FileHandle {
//   _events: [Object: null prototype] {},
//   _eventsCount: 0,
//   _maxListeners: undefined,
//   close: [Function: close],
//   [Symbol(kCapture)]: false,
//   [Symbol(kHandle)]: FileHandle {},
//   [Symbol(kFd)]: 4,
//   [Symbol(kRefs)]: 1,
//   [Symbol(kClosePromise)]: null
// }
```

### `fs.stat()`

```javascript
const FILE_PATH = "../document/doc.md";
try {
  const file = await fs.open(FILE_PATH, "r");
  const status = await file.stat();
  console.log(status);
  file.close();
} catch (error) {
  console.log(error);
}

// Stats {
//   dev: 3201315673,
//   mode: 33206,
//   nlink: 1,
//   uid: 0,
//   gid: 0,
//   rdev: 0,
//   blksize: 4096,
//   ino: 281474979384596,
//   size: 2739,
//   blocks: 8,
//   atimeMs: 1678997603620.8088,
//   mtimeMs: 1678997603270.4573,
//   ctimeMs: 1678997603270.4573,
//   birthtimeMs: 1678993559418.7566,
//   atime: 2023-03-16T20:13:23.621Z,
//   mtime: 2023-03-16T20:13:23.270Z,
//   ctime: 2023-03-16T20:13:23.270Z,
//   birthtime: 2023-03-16T19:05:59.419Z
// }
```

### `read(buffer, offset, length, position)` || `read([options])` || `read(buffer[, options])`

Reads data from the file and stores that in the given buffer.

- `buffer` `<Buffer>`| `<TypedArray>` | `<DataView>` A buffer that will be filled with the file data read.
- `offset` `<integer>` The location in the buffer at which to start filling.
- `length` `<integer>` The number of bytes to read.
- `position` `<integer>` | `<null>` The location where to begin reading data from the file.
- Returns: `<Promise>`
  - bytesRead `<integer>` The number of bytes read
  - buffer `<Buffer>` A reference to the passed in buffer argument.

```javascript
const FILE_PATH = "../document/doc.md";
try {
  const file = await fs.open(FILE_PATH, "r");
  const status = await file.stat();
  const size = status.size;
  const buffer = Buffer.alloc(size);
  const offset = 0;
  const length = buffer.byteLength;
  const position = 0;
  const bytesRead = await file.read(buffer, offset, length, position);
  console.log(buffer.toString("utf8", bytesRead));
  file.close();
} catch (error) {
  console.log(error);
}
```

### `readFile(options)` || `readFile(path[, options])`

- Asynchronously reads the entire contents of a file.
- options
  - encoding `<string>` | `<null>` Default: `null`
  - flag `<string>` See support of file system flags. Default: `'r'`.
  - signal `<AbortSignal>` allows aborting an in-progress readFile

```javascript
try {
  const filePath = new URL(FILE_PATH, import.meta.url);
  const content = await fs.readFile(filePath, "utf-8");
  const content_1 = await fs.readFile(filePath, {
    encoding: "utf-8",
  });
  console.log(content);
} catch (error) {
  console.log(error);
}
```

```javascript
try {
  const file = await fs.open(FILE_PATH, "r");
  const content = await file.readFile("utf-8");
  console.log(content);
  file.close();
} catch (error) {
  console.log(error);
}
```

### `readLines([options])`

### `readlink(path[, options])`

### `write(buffer, offset[, length[, position]]` || `write(buffer[, options])` || `write(string[, position[, encoding]])`

```javascript
try {
  const file = await fs.open(WRITE_PATH, "w");
  const data = "Hi, Im Sizar!!";
  await file.write(data);
  file.close();
} catch (error) {
  console.log(error);
}
```

### `writeFile(file, data[, options])` || `appendFile(path, data[, options])`

- file `<string>` | `<Buffer>` |`<URL>` | `<FileHandle>` filename or `FileHandle`
- data `<string>`| `<Buffer>` | `<TypedArray>` | `<Stream>`
- options `<Object>` | `<string>`
  - `encoding`
  - `mode`
  - `flag`
  - `signal`
- Returns: `<Promise>`Fulfills with undefined upon success.

```javascript
try {
  const data = "Hi, Im Sizar!!!";
  await fs.writeFile(WRITE_PATH, data, { encoding: "utf-8", flag: "a" });
} catch (error) {
  console.log(error);
}
```

### `truncate(len)`

- len `<integer>`Default: 0
- Returns: `<Promise>` Fulfills with undefined upon success.

```javascript
let file = null;
try {
  file = await fs.open(WRITE_PATH, "r+");
  await file.truncate(4);
} finally {
  await file?.close();
}
```

### `copyFile(src, dest[, mode])`

Asynchronously copies src to dest. By default, dest is overwritten if it already exists.

- src `<string>` | `<Buffer>` | `<URL>` source filename to copy
- dest `<string`> | `<Buffer>` | `<URL>` - destination filename of the copy operation
- mode `<integer>`
  - `fs.constants.COPYFILE_EXCL`: The copy operation will fail if `dest` already exists.
  - `fs.constants.COPYFILE_FICLONE`
  - `fs.constants.COPYFILE_FICLONE_FORCE`

```javascript
try {
  await fs.copyFile(WRITE_PATH, COPY_PATH);
} catch {
  console.error("The file could not be copied");
}
```

```javascript
try {
  await fs.copyFile(WRITE_PATH, COPY_PATH, fs.constants.COPYFILE_EXCL);
} catch {
  console.error("The file could not be copied");
}
```

### `mkdir(path[, options])`

Asynchronously creates a directory.

- path `<string>` | `<Buffer>` | `<URL>`
- options
  - recursive `<boolean>`

```javascript
try {
  const dir = new URL(`${DIR_PATH}/assets/lib`, import.meta.url);
  await fs.mkdir(dir, { recursive: true });
} catch (error) {
  console.log(error);
}
```

### `opendir(path[, options])`

Asynchronously open a directory for iterative scanning.

- path `<string>` | `<Buffer>` | `<URL>`
- options
  - encoding `<boolean>`
  - bufferSize

```javascript
try {
  const dir = await fs.opendir(DIR_PATH);
  console.log(dir);

  for await (const dirent of dir) {
    console.log(dirent);
    console.log(dirent.name);
    const url = new URL(dirent, import.meta.url);
    console.log(url);
  }
} catch (error) {
  console.log(error);
}
```

### `readdir(path[, options])`

Asynchronously open a directory for iterative scanning.

- path `<string>` | `<Buffer>` | `<URL>`
- options
  - `encoding` `<boolean>`
  - `withFileTypes`

```javascript
try {
  const files = await fs.readdir(DIR_PATH);
  console.log(files);
  for (const file of files) {
    console.log(file);
    const url = new URL(file, import.meta.url);
    console.log(url);
  }
} catch (error) {
  console.log(error);
}
```

### `realpath(path[, options])`

- path `<string>` | `<Buffer>` | `<URL>`
- options
  - encoding `<boolean>`

```javascript
try {
  const path = await fs.realpath(DIR_PATH);
  console.log(path);
} catch (error) {
  console.log(error);
}
```

### `rename(oldPath, newPath)`

```javascript
try {
  await fs.rename(
    `${DIR_PATH}/rename-me.txt`,
    `${DIR_PATH}/rename-me-done.txt`
  );
} catch (error) {
  console.log(error);
}
```
