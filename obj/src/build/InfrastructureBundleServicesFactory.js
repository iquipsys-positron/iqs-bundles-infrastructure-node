"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const pip_services_blobs_node_1 = require("pip-services-blobs-node");
const pip_services_eventlog_node_1 = require("pip-services-eventlog-node");
const pip_services_statistics_node_1 = require("pip-services-statistics-node");
// import { ChangeScopesServiceFactory } from 'pip-services-changescopes-node';
// import { FacetsServiceFactory } from 'pip-services-facets-node';
const pip_services_sms_node_1 = require("pip-services-sms-node");
const pip_services_email_node_1 = require("pip-services-email-node");
const pip_services_settings_node_1 = require("pip-services-settings-node");
class InfrastructureBundleServicesFactory extends pip_services3_container_node_1.DefaultContainerFactory {
    constructor() {
        super();
        this.add(new pip_services_blobs_node_1.BlobsServiceFactory);
        this.add(new pip_services_eventlog_node_1.EventLogServiceFactory);
        this.add(new pip_services_statistics_node_1.StatisticsServiceFactory);
        // this.add(new ChangeScopesServiceFactory);
        // this.add(new FacetsServiceFactory);
        this.add(new pip_services_sms_node_1.SmsServiceFactory);
        this.add(new pip_services_email_node_1.EmailServiceFactory);
        this.add(new pip_services_settings_node_1.SettingsServiceFactory);
    }
}
exports.InfrastructureBundleServicesFactory = InfrastructureBundleServicesFactory;
//# sourceMappingURL=InfrastructureBundleServicesFactory.js.map