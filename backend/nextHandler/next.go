package next

import (
	"embed"
	"io/fs"
)

//go:embed dist
//go:embed dist/_next
//go:embed dist/_next/static/chunks/pages/*.js
//go:embed dist/_next/static/*/*.js
var nextFS embed.FS

func GetNextFs() (fs.FS, error) {
	retFs, err := fs.Sub(nextFS, "dist")

	return retFs, err
}
