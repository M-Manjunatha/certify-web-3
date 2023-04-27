// const Ipfs = require("ipfs-api");
// const ip = new Ipfs({ host: "ipfs.infura.io", port: 5001, protocol: "https" });
// export default ip;

import { create } from 'ipfs-http-client';
// const { create } =  require('ipfs-http-client');
const ip = create({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' });
export default ip;
