"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const pip_clients_blobs_node_1 = require("pip-clients-blobs-node");
const pip_clients_eventlog_node_1 = require("pip-clients-eventlog-node");
const pip_clients_statistics_node_1 = require("pip-clients-statistics-node");
// import { ChangeScopesClientFactory } from 'pip-clients-changescopes-node';
// import { FacetsClientFactory } from 'pip-clients-facets-node';
const pip_clients_sms_node_1 = require("pip-clients-sms-node");
const pip_clients_email_node_1 = require("pip-clients-email-node");
const pip_clients_settings_node_1 = require("pip-clients-settings-node");
class InfrastructureBundleClientsFactory extends pip_services3_container_node_1.DefaultContainerFactory {
    constructor() {
        super();
        this.add(new pip_clients_blobs_node_1.BlobsClientFactory);
        this.add(new pip_clients_eventlog_node_1.EventLogClientFactory);
        this.add(new pip_clients_statistics_node_1.StatisticsClientFactory);
        // this.add(new ChangeScopesClientFactory);
        // this.add(new FacetsClientFactory);
        this.add(new pip_clients_sms_node_1.SmsClientFactory);
        this.add(new pip_clients_email_node_1.EmailClientFactory);
        this.add(new pip_clients_settings_node_1.SettingsClientFactory);
    }
}
exports.InfrastructureBundleClientsFactory = InfrastructureBundleClientsFactory;
//# sourceMappingURL=InfrastructureBundleClientsFactory.js.map