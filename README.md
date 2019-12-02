# Description

Shows some common environment and CLI overrides that are not illustrated at `nconf`

# Examples

## Example z1
Running `npm run z1` outputs:

```
> nconf-examples@1.0.0 z1 /Users/jburke/Src/dev-potatopankakes/nconf-examples
> z=2 node src/index.js --z 3

using config file: conf/sample.json
---------------
x:y as nconf.get(x:y): 1
x:y as nconf.get(x).y: 1
process.env.x:y: undefined
process.env.x.y: undefined
---------------
z as nconf.get(z): 3
process.env.z: 2
```

## Example z2
Running `npm run z2` outputs:

```
> nconf-examples@1.0.0 z2 /Users/jburke/Src/dev-potatopankakes/nconf-examples
> z=2 node src/index.js

using config file: conf/sample.json
---------------
x:y as nconf.get(x:y): 1
x:y as nconf.get(x).y: 1
process.env.x:y: undefined
process.env.x.y: undefined
---------------
z as nconf.get(z): 2
process.env.z: 2
```

## Example z3
Running `npm run z3` outputs:
```
> nconf-examples@1.0.0 z1 /Users/jburke/Src/dev-potatopankakes/nconf-examples
> node src/index.js

using config file: conf/sample.json
---------------
x:y as nconf.get(x:y): 1
x:y as nconf.get(x).y: 1
process.env.x:y: undefined
process.env.x.y: undefined
---------------
z as nconf.get(z): 1
process.env.z: undefined
```

## Example xy1
Running `npm run xy1` outputs:

```
> nconf-examples@1.0.0 xy1 /Users/jburke/Src/dev-potatopankakes/nconf-examples
> x:y=2 node src/index.js --x:y 3 || echo 'See that Bash will not accept env vars w/colons? (or anything other than underscore and alphanumerics)'

sh: x:y=2: command not found
See that Bash will not accept env vars w/colons? (or anything other than underscore and alphanumerics)
```

## Example xy2
Running `npm run xy2` outputs:

```
> nconf-examples@1.0.0 xy2 /Users/jburke/Src/dev-potatopankakes/nconf-examples
> x.y=2 node src/index.js --x:y 3 || echo 'See that Bash will not accept env vars w/colons? (or anything other than underscore and alphanumerics)'

sh: x.y=2: command not found
See that Bash will not accept env vars w/colons? (or anything other than underscore and alphanumerics)
```

This is not illustrating anything about `nconf`, as `nconf` would require the colon separators... but I include it for illustration purposes.

## Example xy3
Running `npm run xy3` outputs:

```
> nconf-examples@1.0.0 xy3 /Users/jburke/Src/dev-potatopankakes/nconf-examples
> env 'x:y=2' node src/index.js --x:y 3

using config file: conf/sample.json
---------------
x:y as nconf.get(x:y): 3
x:y as nconf.get(x).y: 3
process.env.x:y: 2
process.env.x.y: undefined
---------------
z as nconf.get(z): 1
process.env.z: undefined
```

## Example xy4
Running `npm run xy4` outputs:

```
> nconf-examples@1.0.0 xy4 /Users/jburke/Src/dev-potatopankakes/nconf-examples
> env 'x:y=2' node src/index.js

using config file: conf/sample.json
---------------
x:y as nconf.get(x:y): 2
x:y as nconf.get(x).y: 2
process.env.x:y: 2
process.env.x.y: undefined
---------------
z as nconf.get(z): 1
process.env.z: undefined
```

## Example xy5
Running `npm run xy5` outputs:

```
> nconf-examples@1.0.0 xy5 /Users/jburke/Src/dev-potatopankakes/nconf-examples
> env 'x.y=2' node src/index.js

using config file: conf/sample.json
---------------
x:y as nconf.get(x:y): 1
x:y as nconf.get(x).y: 1
process.env.x:y: undefined
process.env.x.y: 2
---------------
z as nconf.get(z): 1
process.env.z: undefined
```
