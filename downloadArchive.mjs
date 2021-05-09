import { exec as baseExec } from 'child_process';
import util from 'util';

const exec = util.promisify(baseExec);

const downloadArchive = async () => {
    await exec("rclone sync --ignore-existing ded:/home/reapersiege/music ./Archive/");
}

export default downloadArchive;