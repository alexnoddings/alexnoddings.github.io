if test -e ./src/pages/.gen/ then
    echo "Enabling gen endpoints"
    mv ./src/pages/.gen/ ./src/pages/~gen/
fi

echo "Running npm install"
npm install

echo "Running npm run dev in background"
npm run dev &

# Wait for Astro to start
echo "Waiting for Astro to start..."
sleep 1s
curl --head http://localhost:4321/
while $? != 0; do 
    echo "Checking Astro start"
    curl --head http://localhost:4321/
    sleep 1s
done

echo "Astro started."

curl http://localhost:4321/~gen/og/og.png -o ./public/meta/og.png
curl http://localhost:4321/~gen/resume/resume.pdf -o ./public/resume/alexnoddings.pdf

favicons=( 
    "android-chrome-512x512.png"
    "android-chrome-192x192.png"
    "apple-touch-icon.png"
    "favicon-32x32.png"
    "favicon-16x16.png"
)
for i in "${favicons[@]}"
do
    curl http://localhost:4321/~gen/favicon/$1 -o ./public/meta/$1
done

# npm starts a new process for 'run dev', so we can't reliably capture and kill
# the spawned process from the returned id
# instead, once done we just kill the node process running 'astro dev'
echo "Killing Astro process"
pkill -f  "^node .*/node_modules/\.bin/astro dev$"
sleep 1s

# Disable gen pages for build
echo "Disable gen endpoints"
mv ./src/pages/~gen/ ./src/pages/.gen/
