import fs from "fs/promises";

import path from "path";

const FILE_PATH = "../document/doc.md";
const WRITE_PATH = "./files/file.txt";
const COPY_PATH = "./files/file-copied.txt";
const DIR_PATH = "./files";

// try {
//   const file = await fs.open(FILE_PATH, "r");
//   const status = await file.stat();
//   const size = status.size;
//   const buffer = Buffer.alloc(size);
//   const offset = 0;
//   const length = buffer.byteLength;
//   const position = 0;
//   const bytesRead = await file.read(buffer, offset, length, position);
//   console.log(buffer.toString("utf8", bytesRead));
//   file.close();
// } catch (error) {
//   console.log(error);
// }

// try {
//   const filePath = new URL(FILE_PATH, import.meta.url);
//   const content = await fs.readFile(filePath, "utf-8");
//   const content_1 = await fs.readFile(filePath, {
//     encoding: "utf-8",
//   });
//   console.log(content);
// } catch (error) {
//   console.log(error);
// }

// try {
//   const file = await fs.open(FILE_PATH, "r");
//   const content = await file.readFile("utf-8");
//   console.log(content);
//   file.close();
// } catch (error) {
//   console.log(error);
// }

// try {
//   const file = await fs.open(WRITE_PATH, "w");
//   const data = "Hi, Im Sizar!!";
//   await file.write(data);
//   file.close();
// } catch (error) {
//   console.log(error);
// }

// try {
//   const data = "Hi, Im Sizar!!!";
//   await fs.writeFile(WRITE_PATH, data, { encoding: "utf-8", flag: "a" });
// } catch (error) {
//   console.log(error);
// }

// let file = null;
// try {
//   file = await fs.open(WRITE_PATH, "r+");
//   await file.truncate(4);
// } finally {
//   await file?.close();
// }

// try {
//   await fs.copyFile(WRITE_PATH, COPY_PATH);
// } catch {
//   console.error("The file could not be copied");
// }

// try {
//   await fs.copyFile(WRITE_PATH, COPY_PATH);
// } catch {
//   console.error("The file could not be copied");
// }

// try {
//   const dir = new URL(`${DIR_PATH}/assets/lib`, import.meta.url);
//   await fs.mkdir(dir, { recursive: true });
// } catch (error) {
//   console.log(error);
// }

// try {
//   const dir = await fs.opendir(DIR_PATH);
//   console.log(dir);

//   for await (const dirent of dir) {
//     console.log(dirent);
//     console.log(dirent.name);
//     const url = new URL(dirent, import.meta.url);
//     console.log(url);
//   }
// } catch (error) {
//   console.log(error);
// }

// try {
//   const files = await fs.readdir(DIR_PATH);
//   console.log(files);
//   for (const file of files) {
//     console.log(file);
//     const url = new URL(file, import.meta.url);
//     console.log(url);
//   }
// } catch (error) {
//   console.log(error);
// }

// try {
//   const path = await fs.realpath(DIR_PATH);
//   console.log(path);
// } catch (error) {
//   console.log(error);
// }

// try {
//   await fs.rename(
//     `${DIR_PATH}/rename-me.txt`,
//     `${DIR_PATH}/rename-me-done.txt`
//   );
// } catch (error) {
//   console.log(error);
// }

// PATH

// try {
//   const basename = path.basename(FILE_PATH);
//   console.log(basename);

//   const basenameNoExt = path.basename(FILE_PATH, ".md");
//   console.log(basenameNoExt);
// } catch (error) {
//   console.log(error);
// }

// try {
//   const dirname = path.dirname(FILE_PATH);
//   console.log(dirname);
// } catch (error) {
//   console.log(error);
// }

// try {
//   const extension = path.extname(FILE_PATH);
//   console.log(extension);
// } catch (error) {
//   console.log(error);
// }

// try {
//   const path_1 = path.format({
//     root: "/ignored",
//     dir: "/dir1/dir2/dir3",
//     base: "file.txt",
//   });
//   console.log(path_1);

//   const path_2 = path.format({
//     root: "/",
//     base: "file.txt",
//     ext: "ignored",
//   });
//   console.log(path_2);

//   const path_3 = path.format({
//     root: "/",
//     name: "file",
//     ext: "txt",
//   });
//   console.log(path_3);

//   // windows

//   const win_path = path.format({
//     dir: "C:\\path\\dir",
//     base: "file.txt",
//   });
//   console.log(win_path);
// } catch (error) {
//   console.log(error);
// }

// try {
//   const isAbs_1 = path.isAbsolute(FILE_PATH);
//   console.log(isAbs_1);

//   const isAbs_2 = path.isAbsolute("/home/user");
//   console.log(isAbs_2);
// } catch (error) {
//   console.log(error);
// }

// try {
//   const join_path = path.join("home", "user", "projects", "x", "f.js");
//   console.log(join_path);
// } catch (error) {
//   console.log(error);
// }

// try {
//   const parse_path = path.parse(COPY_PATH);
//   console.log(parse_path);
// } catch (error) {
//   console.log(error);
// }

// try {
//   const rel_path = path.relative(WRITE_PATH, COPY_PATH);
//   console.log(rel_path);

//   const rel_path1 = path.relative(
//     "/home/user/project/x/z/app/y",
//     "/home/user/project/x/src/app"
//   );
//   console.log(rel_path1);
// } catch (error) {
//   console.log(error);
// }

// try {
//   const res_path = path.resolve(COPY_PATH);
//   console.log(res_path);

//   const res_path1 = path.resolve("/document", FILE_PATH);
//   console.log(res_path1);

//   const res_path2 = path.resolve("/src", "project", "index.js");
//   console.log(res_path2);
// } catch (error) {
//   console.log(error);
// }

// URL

// try {
//   const url = new URL("/user", "https://artistify.com");
//   console.log(url);
// } catch (error) {
//   console.log(error);
// }

// try {
//   const url = new URL("https://www.artistify.app:74/user/sizar#profile");
//   console.log(url);

//   console.log(url.hash);
//   console.log(url.host);
//   console.log(url.hostname);
//   console.log(url.href);
//   console.log(url.origin);
//   console.log(url.pathname);
//   console.log(url.port);
//   console.log(url.protocol);
// } catch (error) {
//   console.log(error);
// }

// try {
//   const url = new URL("https://www.artistify.app/search?user=annonimous");
//   console.log(url);
//   console.log(url.search);
//   console.log(url.searchParams);
//   console.log(url.searchParams.sort());
// } catch (error) {
//   console.log(error);
// }

// try {
//   const url = new URL("https://www.artistify.app/search?user=annonimous");
//   console.log(url);

//   console.log(url.searchParams.get("user"));
//   console.log(url.href);

//   console.log(url.searchParams.append("user", "newman"));
//   console.log(url.href);

//   console.log(url.searchParams.delete("user"));
//   console.log(url.href);

//   console.log(url.searchParams.set("user", "someone"));
//   console.log(url.href);
// } catch (error) {
//   console.log(error);
// }

// try {
//   const url = new URL("https://www.artistify.app/search?user=annonimous");

//   const x = new URLSearchParams(url.searchParams);
//   console.log(x);
//   x.append("a", "c");
//   console.log(x);
// } catch (error) {
//   console.log(error);
// }

// try {
//   let params = new URLSearchParams("user=annonimous&role=admin");
//   console.log(params.get("user"));
//   console.log(params.toString());
// } catch (error) {
//   console.log(error);
// }

// object

// try {
//   const params = new URLSearchParams({
//     user: "anonymous",
//     role: "admin",
//     query: ["a", "b", "c"],
//   });

//   console.log(params.getAll("query"));
//   console.log(params.getAll("user"));
//   console.log(params.toString());
// } catch (error) {
//   console.log(error);
// }

// urlSearchParams.append(name, value)
// urlSearchParams.delete(name)
// urlSearchParams.get(name)
// urlSearchParams.getAll(name)
// urlSearchParams.has(name)
// urlSearchParams.set(name, value)
// urlSearchParams.sort()
// urlSearchParams.toString()
// urlSearchParams.entries()
// urlSearchParams.keys()
// urlSearchParams.values()
// urlSearchParams.size()

// try {
//   const myURL = new URL("https://example.org/?a=b&c=d");
//   myURL.searchParams.forEach((value, name, searchParams) => {
//     console.log(name, value, myURL.searchParams === searchParams);
//   });
//   console.log(myURL.searchParams.values());
// } catch (error) {
//   console.log(error);
// }
