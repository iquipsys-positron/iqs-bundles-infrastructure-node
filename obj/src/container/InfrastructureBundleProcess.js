"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
const InfrastructureBundleServicesFactory_1 = require("../build/InfrastructureBundleServicesFactory");
const InfrastructureBundleClientsFactory_1 = require("../build/InfrastructureBundleClientsFactory");
class InfrastructureBundleProcess extends pip_services3_container_node_1.ProcessContainer {
    constructor() {
        super("infrastructure", "Pip.services infrastructure bundle");
        this._factories.add(new InfrastructureBundleServicesFactory_1.InfrastructureBundleServicesFactory);
        this._factories.add(new InfrastructureBundleClientsFactory_1.InfrastructureBundleClientsFactory);
        this._factories.add(new pip_services3_rpc_node_1.DefaultRpcFactory);
        this._factories.add(new pip_services3_aws_node_1.DefaultAwsFactory);
    }
}
exports.InfrastructureBundleProcess = InfrastructureBundleProcess;
//# sourceMappingURL=InfrastructureBundleProcess.js.map