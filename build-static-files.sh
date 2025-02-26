curl http://localhost:4321/~gen/og/og.png -o ./public/meta/og.png

favicons=( 
    "android-chrome-512x512.png"
    "android-chrome-192x192.png"
    "apple-touch-icon.png"
    "favicon-32x32.png"
    "favicon-16x16.png"
)
for i in "${favicons[@]}"
do
    echo "..."
    curl http://localhost:4321/~gen/favicon/$i -o ./public/meta/$i
done
