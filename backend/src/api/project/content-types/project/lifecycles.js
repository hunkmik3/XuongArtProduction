'use strict';

const { exec } = require('child_process');
const path = require('path');

module.exports = {
  async afterCreate(event) {
    const { result } = event;
    await generateHlsIfNeeded(result);
  },
  async afterUpdate(event) {
    const { result } = event;
    await generateHlsIfNeeded(result);
  }
};

async function generateHlsIfNeeded(project) {
  try {
    const uploadBase = path.join(process.cwd(), 'public', 'uploads');
    const video = project?.video;
    if (!video || !Array.isArray(video) || video.length === 0) return;
    const file = video[0];
    const inputPath = path.join(uploadBase, file.hash + file.ext);
    const outDir = path.join(uploadBase, file.hash + '_hls');
    const master = path.join(outDir, 'master.m3u8');

    // Basic HLS (single bitrate). You can extend to multi-bitrate.
    const cmd = `mkdir -p "${outDir}" && ffmpeg -y -i "${inputPath}" -profile:v main -level 3.1 -start_number 0 -hls_time 4 -hls_list_size 0 -f hls "${master}"`;
    exec(cmd, async (err) => {
      if (err) return;
      const publicUrl = `/uploads/${file.hash}_hls/master.m3u8`;
      await strapi.entityService.update('api::project.project', project.id, { data: { hls: publicUrl } });
    });
  } catch (e) {
    // silent fail; admin có thể tự tạo HLS thủ công
  }
}


