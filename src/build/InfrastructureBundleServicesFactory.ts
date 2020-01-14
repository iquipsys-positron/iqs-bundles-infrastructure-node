import { CompositeFactory } from 'pip-services3-components-node';
import { DefaultContainerFactory } from 'pip-services3-container-node';

import { BlobsServiceFactory } from 'pip-services-blobs-node';
import { EventLogServiceFactory } from 'pip-services-eventlog-node';
import { StatisticsServiceFactory } from 'pip-services-statistics-node';
// import { ChangeScopesServiceFactory } from 'pip-services-changescopes-node';
// import { FacetsServiceFactory } from 'pip-services-facets-node';
import { SmsServiceFactory } from 'pip-services-sms-node';
import { EmailServiceFactory } from 'pip-services-email-node';
import { SettingsServiceFactory } from 'pip-services-settings-node';

export class InfrastructureBundleServicesFactory extends DefaultContainerFactory {

    public constructor() {
        super();

        this.add(new BlobsServiceFactory);
        this.add(new EventLogServiceFactory);
        this.add(new StatisticsServiceFactory);
        // this.add(new ChangeScopesServiceFactory);
        // this.add(new FacetsServiceFactory);
        this.add(new SmsServiceFactory);
        this.add(new EmailServiceFactory);
        this.add(new SettingsServiceFactory);
        
    }

}
