FROM debian:bullseye-slim as builder

WORKDIR /bench

RUN apt update

RUN apt install curl unzip -y

RUN curl -fsSL https://deno.land/x/install/install.sh | sh

ENV DENO_INSTALL="/root/.deno"
ENV PATH="$DENO_INSTALL/bin:$PATH"

COPY src src

RUN deno compile --output benchtool-deno src/main.ts


FROM debian:bullseye-slim as runtime
WORKDIR /bench
COPY --from=builder /bench/* ./

ENTRYPOINT ["/bench/benchtool-deno"]