# Benchtool Deno (Typescript)
Simple benchmark using deno with typescript

Example running bench
```bash
deno run src/main.ts 1 100000 5
```

### Compiling to executable
```bash
make compile
# or using the part of makefile
deno compile --output benchtool-deno src/main.ts
```
