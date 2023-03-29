# URL

## `new URL(input[, base])`

- input `<string>`
- base `<string>`

```javascript
try {
  const url = new URL("/user", "https://artistify.com");
  console.log(url);
} catch (error) {
  console.log(error);
}
```

## `new URL(url)`

- `url.hash`
- `url.hostname`
- `url.href`
- `url.origin`
- `url.pathname`
- `url.port`
- `url.protocol`
- `url.search`
- `url.searchParams`
- `url.username`
- `url.password`

```javascript
try {
  const url = new URL("https://www.artistify.app:74/user/sizar#profile");
  console.log(url);

  console.log(url.hash);
  console.log(url.host);
  console.log(url.hostname);
  console.log(url.href);
  console.log(url.origin);
  console.log(url.pathname);
  console.log(url.port);
  console.log(url.protocol);
} catch (error) {
  console.log(error);
}
```

```javascript
try {
  const url = new URL("https://www.artistify.app/search?user=annonimous");
  console.log(url);
  console.log(url.search);
  console.log(url.searchParams);
  console.log(url.searchParams.sort());
} catch (error) {
  console.log(error);
}
```

### `URLSearchParams`

The `URLSearchParams` API provides read and write access to the query of a `URL`. The `URLSearchParams` class can also be used standalone with one of the four following constructors. The `URLSearchParams` class is also available on the global object.

- searchParams.get("user")
- searchParams.append("user","username)
- searchParams.delete("user")
- searchParams.set("user"."username")

```javascript
try {
  const url = new URL("https://www.artistify.app/search?user=annonimous");
  console.log(url);

  console.log(url.searchParams.get("user"));
  console.log(url.href);

  console.log(url.searchParams.append("user", "newman"));
  console.log(url.href);

  console.log(url.searchParams.delete("user"));
  console.log(url.href);

  console.log(url.searchParams.set("user", "someone"));
  console.log(url.href);
} catch (error) {
  console.log(error);
}
```

```javascript
try {
  const url = new URL("https://www.artistify.app/search?user=annonimous");

  const x = new URLSearchParams(url.searchParams);
  console.log(x);
  x.append("a", "c");
  console.log(x);
} catch (error) {
  console.log(error);
}
```

### `new URLSearchParams(url.searchParams)`

**String**

```javascript
try {
  let params = new URLSearchParams("user=annonimous&role=admin");
  console.log(params.get("user"));
  console.log(params.toString());
} catch (error) {
  console.log(error);
}
```

**Object**

- params.getAll("user")

```javascript
try {
  const params = new URLSearchParams({
    user: "anonymous",
    role: "admin",
    query: ["a", "b", "c"],
  });

  console.log(params.getAll("query"));
  console.log(params.getAll("user"));
  console.log(params.toString());
} catch (error) {
  console.log(error);
}
```

- urlSearchParams.append(name, value)
-
