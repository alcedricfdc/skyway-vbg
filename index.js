import * as processors from 'skyway-video-processors';

// Try to unwrap from default if necessary
const actual = processors?.VirtualBackground
  ? processors
  : (processors.default?.VirtualBackground ? processors.default : {});

window.MySkyWayProcessors = {
  VirtualBackground: actual.VirtualBackground,
  BlurBackground: actual.BlurBackground
};
