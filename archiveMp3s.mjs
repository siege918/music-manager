import { exec as baseExec } from 'child_process';
import util from 'util';

const exec = util.promisify(baseExec);

const archiveMp3s = async () => {
    await exec("rsync -a --ignore-existing --prune-empty-dirs --include '*/' --include '*.mp3' --exclude '*' Archive/ MP3s/");
}

export default archiveMp3s;