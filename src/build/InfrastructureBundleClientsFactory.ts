import { CompositeFactory } from 'pip-services3-components-node';
import { DefaultContainerFactory } from 'pip-services3-container-node';

import { BlobsClientFactory } from 'pip-clients-blobs-node';
import { EventLogClientFactory } from 'pip-clients-eventlog-node';
import { StatisticsClientFactory } from 'pip-clients-statistics-node';
// import { ChangeScopesClientFactory } from 'pip-clients-changescopes-node';
// import { FacetsClientFactory } from 'pip-clients-facets-node';
import { SmsClientFactory } from 'pip-clients-sms-node';
import { EmailClientFactory } from 'pip-clients-email-node';
import { SettingsClientFactory } from 'pip-clients-settings-node';

export class InfrastructureBundleClientsFactory extends DefaultContainerFactory {

    public constructor() {
        super();

        this.add(new BlobsClientFactory);
        this.add(new EventLogClientFactory);
        this.add(new StatisticsClientFactory);
        // this.add(new ChangeScopesClientFactory);
        // this.add(new FacetsClientFactory);
        this.add(new SmsClientFactory);
        this.add(new EmailClientFactory);
        this.add(new SettingsClientFactory);
        
    }

}
