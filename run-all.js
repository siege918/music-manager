#!/usr/bin/env node

import uploadArchive from './uploadArchive.mjs';
import downloadArchive from './downloadArchive.mjs';
import convert from './convert.mjs';
import archiveMp3 from './archiveMp3s.mjs';

await uploadArchive();
await downloadArchive();
await convert();
await archiveMp3();