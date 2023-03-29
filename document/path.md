# Path

## `basename(path[, suffix])`

The `path.basename()` method returns the last portion of a `path`,

- path `<string>`
- suffix `<string>` An optional suffix to remove
- Returns: `<string>`

```javascript
try {
try {
  const basename = path.basename(FILE_PATH);
  console.log(basename);

  const basenameNoExt = path.basename(FILE_PATH, ".md");
  console.log(basenameNoExt);
} catch (error) {
  console.log(error);
}

```

## `dirname(path)`

The `path.dirname()` method returns the directory name of a `path`,

- path `<string>`
- Returns: `<string>`

```javascript
try {
  const dirname = path.dirname(FILE_PATH);
  console.log(dirname);
} catch (error) {
  console.log(error);
}
```

## `extname(path)`

The `path.extname()` method returns the extension of the `path`

- path `<string>`
- Returns: `<string>`

```javascript
try {
  const extension = path.extname(FILE_PATH);
  console.log(extension);
} catch (error) {
  console.log(error);
}
```

## `format(pathObject)`

The `path.format()` method returns a path string from an object.

- dir `<string>`
- root `<string>`
- base `<string>`
- name `<string>`
- ext `<string>`

- `pathObject.root` is ignored if `pathObject.dir` is provided
- `pathObject.ext` and `pathObject.name` are ignored if `pathObject.base` exists

```javascript
try {
  // If `dir`, `root` and `base` are provided, `${dir}${path.sep}${base} will be returned. `root` is ignored.
  const path_1 = path.format({
    root: "/ignored",
    dir: "/dir1/dir2/dir3",
    base: "file.txt",
  });
  console.log(path_1);

  // `root` will be used if `dir` is not specified.
  const path_2 = path.format({
    root: "/",
    base: "file.txt",
    ext: "ignored",
  });
  console.log(path_2);

  const path_3 = path.format({
    root: "/",
    name: "file",
    ext: "txt",
  });
  console.log(path_3);
} catch (error) {
  console.log(error);
}
```

```javascript
// windows
const win_path = path.format({
  dir: "C:\\path\\dir",
  base: "file.txt",
});
console.log(win_path);
```

## `parse(path)`

The `path.parse()`method returns an object whose properties represent significant elements of the `path`.

```javascript
try {
  const parse_path = path.parse(COPY_PATH);
  console.log(parse_path);
} catch (error) {
  console.log(error);
}
```

## `isAbsolute(path)`

_An absolute path specifies the full path to a file or directory from the root directory of the file system.It always starts with a forward slash (/) on unix, drive letter (e.g. C:) on Windows_

The `path.isAbsolute()` method determines if path is an absolute path.

```javascript
try {
  const isAbs_1 = path.isAbsolute(FILE_PATH);
  console.log(isAbs_1);
  const isAbs_2 = path.isAbsolute("/home/user");
  console.log(isAbs_2);
} catch (error) {
  console.log(error);
}
```

## `.join([...paths])`

- ...paths `<string>` A sequence of path segments

```javascript
try {
  const join_path = path.join("home", "user", "projects", "x", "f.js");
  console.log(join_path);
} catch (error) {
  console.log(error);
}
```

## `normalize(path)`

## `relative(from, to)`

The `path.relative()` method returns the relative path from `from` to `to` based on the current working directory.

- from `<string>`
- to `<string>`

```javascript
try {
  const rel_path = path.relative(WRITE_PATH, COPY_PATH);
  console.log(rel_path);

  const rel_path1 = path.relative(
    "/home/user/project/x/z/app/y",
    "/home/user/project/x/src/app"
  );
  console.log(rel_path1);
} catch (error) {
  console.log(error);
}
```

## `resolve([...paths])`

- ...paths `<string>` A sequence of paths or path segments

The `path.resolve()` method resolves a sequence of paths or path segments into an absolute path.

```javascript
try {
  const res_path = path.resolve(COPY_PATH);
  console.log(res_path);

  const res_path1 = path.resolve("/document", FILE_PATH);
  console.log(res_path1);

  const res_path2 = path.resolve("/src", "project", "index.js");
  console.log(res_path2);
} catch (error) {
  console.log(error);
}
```

## `path.sep`
