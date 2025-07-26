ffmpeg -i your-movie.mkv \
  -c:v libx264 -c:a aac -ac 2 \
  -strict -2 -b:a 128k \
  -hls_time 10 -hls_list_size 0 \
  -hls_segment_filename "output_%03d.ts" \
  output.m3u8