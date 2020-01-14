let InfrastructureBundleProcess = require('../obj/src/container/InfrastructureBundleProcess').InfrastructureBundleProcess;

try {
    new InfrastructureBundleProcess().run(process.argv);
} catch (ex) {
    console.error(ex);
}