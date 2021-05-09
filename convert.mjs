import util from 'util';

import fs from 'fs';
import glob from 'glob-promise';
import { exec } from 'child_process';
import path from 'path';

const execProm = util.promisify(exec);

const convert = async () => {
    const files = await glob("Archive/**/*.flac");

    for (var file of files) {

        const mp3Path = getMp3Path(file);

        if (fs.existsSync(mp3Path)) {
            console.log(`"${mp3Path}" exists, skipping`);
            continue;
        }

        console.log(`${file} => ${mp3Path}`);
        
        try {
            await execProm(`ffmpeg -n -i "${file}" -c:v copy -b:a 320k "${mp3Path}"`);
        } catch (err) {
            console.error(err);
        }
    }
}

function getMp3Path(flacPath) {
    const parsedPath = path.parse(flacPath);

    let splitDir = parsedPath.dir.split('/');

    fs.mkdirSync(path.join("MP3s", ...splitDir.slice(1)), {recursive: true});

    return path.join("MP3s", ...splitDir.slice(1), `${parsedPath.name}.mp3`);
} 

export default convert;