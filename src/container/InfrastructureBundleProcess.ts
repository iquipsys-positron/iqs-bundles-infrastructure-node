import { IReferences } from 'pip-services3-commons-node';
import { ProcessContainer } from 'pip-services3-container-node';
import { DefaultRpcFactory } from 'pip-services3-rpc-node';
import { DefaultAwsFactory } from 'pip-services3-aws-node';

import { InfrastructureBundleServicesFactory } from '../build/InfrastructureBundleServicesFactory';
import { InfrastructureBundleClientsFactory } from '../build/InfrastructureBundleClientsFactory';

export class InfrastructureBundleProcess extends ProcessContainer {

    public constructor() {
        super("infrastructure", "Pip.services infrastructure bundle");
        this._factories.add(new InfrastructureBundleServicesFactory);
        this._factories.add(new InfrastructureBundleClientsFactory);
        this._factories.add(new DefaultRpcFactory);
        this._factories.add(new DefaultAwsFactory);
    }

}
