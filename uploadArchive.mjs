import { exec as baseExec } from 'child_process';
import util from 'util';

const exec = util.promisify(baseExec);

const uploadArchive = async () => {
    await exec("rclone copy --ignore-existing ./Archive/ ded:/home/reapersiege/music");
}

export default uploadArchive;