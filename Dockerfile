FROM golang:1.16

WORKDIR /typemaster/backend

ENV GOPATH="/typemaster:${GOPATH}"

COPY ./backend/go.mod ./
COPY ./backend/go.sum ./
RUN go mod download

COPY ./backend/* ./

# Build
RUN go build -o main

# Create final image
EXPOSE 8080
CMD ["./main"]