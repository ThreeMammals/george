<?php return [
  'service' => [
    'actions' => [
      'CreateDhcpOptions' => [
        'request' => [
          'operation' => 'CreateDhcpOptions',
        ],
        'resource' => [
          'type' => 'DhcpOptions',
          'identifiers' => [
            [
              'target' => 'Id',
              'sourceType' => 'responsePath',
              'source' => 'DhcpOptions.DhcpOptionsId',
            ],
          ],
          'path' => 'DhcpOptions',
        ],
      ],
      'CreateInstances' => [
        'request' => [
          'operation' => 'RunInstances',
        ],
        'resource' => [
          'type' => 'Instance',
          'identifiers' => [
            [
              'target' => 'Id',
              'sourceType' => 'responsePath',
              'source' => 'Instances[].InstanceId',
            ],
          ],
          'path' => 'Instances[]',
        ],
      ],
      'CreateInternetGateway' => [
        'request' => [
          'operation' => 'CreateInternetGateway',
        ],
        'resource' => [
          'type' => 'InternetGateway',
          'identifiers' => [
            [
              'target' => 'Id',
              'sourceType' => 'responsePath',
              'source' => 'InternetGateway.InternetGatewayId',
            ],
          ],
          'path' => 'InternetGateway',
        ],
      ],
      'CreateKeyPair' => [
        'request' => [
          'operation' => 'CreateKeyPair',
        ],
        'resource' => [
          'type' => 'KeyPair',
          'identifiers' => [
            [
              'target' => 'Name',
              'sourceType' => 'responsePath',
              'source' => 'KeyName',
            ],
          ],
        ],
      ],
      'CreateNetworkAcl' => [
        'request' => [
          'operation' => 'CreateNetworkAcl',
        ],
        'resource' => [
          'type' => 'NetworkAcl',
          'identifiers' => [
            [
              'target' => 'Id',
              'sourceType' => 'responsePath',
              'source' => 'NetworkAcl.NetworkAclId',
            ],
          ],
          'path' => 'NetworkAcl',
        ],
      ],
      'CreateNetworkInterface' => [
        'request' => [
          'operation' => 'CreateNetworkInterface',
        ],
        'resource' => [
          'type' => 'NetworkInterface',
          'identifiers' => [
            [
              'target' => 'Id',
              'sourceType' => 'responsePath',
              'source' => 'NetworkInterface.NetworkInterfaceId',
            ],
          ],
          'path' => 'NetworkInterface',
        ],
      ],
      'CreatePlacementGroup' => [
        'request' => [
          'operation' => 'CreatePlacementGroup',
        ],
        'resource' => [
          'type' => 'PlacementGroup',
          'identifiers' => [
            [
              'target' => 'Id',
              'sourceType' => 'requestParameter',
              'source' => 'GroupName',
            ],
          ],
        ],
      ],
      'CreateRouteTable' => [
        'request' => [
          'operation' => 'CreateRouteTable',
        ],
        'resource' => [
          'type' => 'RouteTable',
          'identifiers' => [
            [
              'target' => 'Id',
              'sourceType' => 'responsePath',
              'source' => 'RouteTable.RouteTableId',
            ],
          ],
          'path' => 'RouteTable',
        ],
      ],
      'CreateSecurityGroup' => [
        'request' => [
          'operation' => 'CreateSecurityGroup',
        ],
        'resource' => [
          'type' => 'SecurityGroup',
          'identifiers' => [
            [
              'target' => 'Id',
              'sourceType' => 'responsePath',
              'source' => 'GroupId',
            ],
          ],
        ],
      ],
      'CreateSnapshot' => [
        'request' => [
          'operation' => 'CreateSnapshot',
        ],
        'resource' => [
          'type' => 'Snapshot',
          'identifiers' => [
            [
              'target' => 'Id',
              'sourceType' => 'responsePath',
              'source' => 'SnapshotId',
            ],
          ],
          'path' => '$',
        ],
      ],
      'CreateSubnet' => [
        'request' => [
          'operation' => 'CreateSubnet',
        ],
        'resource' => [
          'type' => 'Subnet',
          'identifiers' => [
            [
              'target' => 'Id',
              'sourceType' => 'responsePath',
              'source' => 'Subnet.SubnetId',
            ],
          ],
          'path' => 'Subnet',
        ],
      ],
      'CreateTags' => [
        'request' => [
          'operation' => 'CreateTags',
        ],
        'resource' => [
          'type' => 'Tag',
          'identifiers' => [
            [
              'target' => 'ResourceId',
              'sourceType' => 'requestParameter',
              'source' => 'Resources[]',
            ],
            [
              'target' => 'Key',
              'sourceType' => 'requestParameter',
              'source' => 'Tags[].Key',
            ],
            [
              'target' => 'Value',
              'sourceType' => 'requestParameter',
              'source' => 'Tags[].Value',
            ],
          ],
        ],
      ],
      'CreateVolume' => [
        'request' => [
          'operation' => 'CreateVolume',
        ],
        'resource' => [
          'type' => 'Image',
          'identifiers' => [
            [
              'target' => 'Id',
              'sourceType' => 'responsePath',
              'source' => 'VolumeId',
            ],
          ],
          'path' => '$',
        ],
      ],
      'CreateVpc' => [
        'request' => [
          'operation' => 'CreateVpc',
        ],
        'resource' => [
          'type' => 'Vpc',
          'identifiers' => [
            [
              'target' => 'Id',
              'sourceType' => 'responsePath',
              'source' => 'Vpc.VpcId',
            ],
          ],
          'path' => 'Vpc',
        ],
      ],
      'CreateVpcPeeringConnection' => [
        'request' => [
          'operation' => 'CreateVpcPeeringConnection',
        ],
        'resource' => [
          'type' => 'VpcPeeringConnection',
          'identifiers' => [
            [
              'target' => 'Id',
              'sourceType' => 'responsePath',
              'source' => 'VpcPeeringConnection.VpcPeeringConnectionId',
            ],
          ],
          'path' => 'VpcPeeringConnection',
        ],
      ],
      'DisassociateRouteTable' => [
        'request' => [
          'operation' => 'DisassociateRouteTable',
        ],
      ],
      'ImportKeyPair' => [
        'request' => [
          'operation' => 'ImportKeyPair',
        ],
        'resource' => [
          'type' => 'KeyPair',
          'identifiers' => [
            [
              'target' => 'Name',
              'sourceType' => 'responsePath',
              'source' => 'KeyName',
            ],
          ],
        ],
      ],
      'RegisterImage' => [
        'request' => [
          'operation' => 'RegisterImage',
        ],
        'resource' => [
          'type' => 'Image',
          'identifiers' => [
            [
              'target' => 'Id',
              'sourceType' => 'responsePath',
              'source' => 'ImageId',
            ],
          ],
        ],
      ],
    ],
    'hasMany' => [
      'DhcpOptionsSets' => [
        'request' => [
          'operation' => 'DescribeDhcpOptions',
        ],
        'resource' => [
          'type' => 'DhcpOptions',
          'identifiers' => [
            [
              'target' => 'Id',
              'sourceType' => 'responsePath',
              'source' => 'DhcpOptions[].DhcpOptionsId',
            ],
          ],
          'path' => 'DhcpOptions[]',
        ],
      ],
      'Images' => [
        'request' => [
          'operation' => 'DescribeImages',
        ],
        'resource' => [
          'type' => 'Image',
          'identifiers' => [
            [
              'target' => 'Id',
              'sourceType' => 'responsePath',
              'source' => 'Images[].ImageId',
            ],
          ],
          'path' => 'Images[]',
        ],
      ],
      'Instances' => [
        'request' => [
          'operation' => 'DescribeInstances',
        ],
        'resource' => [
          'type' => 'Instance',
          'identifiers' => [
            [
              'target' => 'Id',
              'sourceType' => 'responsePath',
              'source' => 'Reservations[].Instances[].InstanceId',
            ],
          ],
          'path' => 'Reservations[].Instances[]',
        ],
      ],
      'InternetGateways' => [
        'request' => [
          'operation' => 'DescribeInternetGateways',
        ],
        'resource' => [
          'type' => 'InternetGateway',
          'identifiers' => [
            [
              'target' => 'Id',
              'sourceType' => 'responsePath',
              'source' => 'InternetGateways[].InternetGatewayId',
            ],
          ],
          'path' => 'InternetGateways[]',
        ],
      ],
      'KeyPairs' => [
        'request' => [
          'operation' => 'DescribeKeyPairs',
        ],
        'resource' => [
          'type' => 'KeyPair',
          'identifiers' => [
            [
              'target' => 'Name',
              'sourceType' => 'responsePath',
              'source' => 'KeyPairs[].KeyName',
            ],
          ],
          'path' => 'KeyPairs[]',
        ],
      ],
      'NetworkAcls' => [
        'request' => [
          'operation' => 'DescribeNetworkAcls',
        ],
        'resource' => [
          'type' => 'NetworkAcl',
          'identifiers' => [
            [
              'target' => 'Id',
              'sourceType' => 'responsePath',
              'source' => 'NetworkAcls[].NetworkAclId',
            ],
          ],
          'path' => 'NetworkAcls[]',
        ],
      ],
      'NetworkInterfaces' => [
        'request' => [
          'operation' => 'DescribeNetworkInterfaces',
        ],
        'resource' => [
          'type' => 'NetworkInterface',
          'identifiers' => [
            [
              'target' => 'Id',
              'sourceType' => 'responsePath',
              'source' => 'NetworkInterfaces[].NetworkInterfaceId',
            ],
          ],
          'path' => 'NetworkInterfaces[]',
        ],
      ],
      'PlacementGroups' => [
        'request' => [
          'operation' => 'DescribePlacementGroups',
        ],
        'resource' => [
          'type' => 'PlacementGroup',
          'identifiers' => [
            [
              'target' => 'Name',
              'sourceType' => 'responsePath',
              'source' => 'PlacementGroups[].GroupName',
            ],
          ],
          'path' => 'PlacementGroups[]',
        ],
      ],
      'RouteTables' => [
        'request' => [
          'operation' => 'DescribeRouteTables',
        ],
        'resource' => [
          'type' => 'RouteTable',
          'identifiers' => [
            [
              'target' => 'Id',
              'sourceType' => 'responsePath',
              'source' => 'RouteTables[].RouteTableId',
            ],
          ],
          'path' => 'RouteTables[]',
        ],
      ],
      'SecurityGroups' => [
        'request' => [
          'operation' => 'DescribeSecurityGroups',
        ],
        'resource' => [
          'type' => 'SecurityGroup',
          'identifiers' => [
            [
              'target' => 'Id',
              'sourceType' => 'responsePath',
              'source' => 'SecurityGroups[].GroupId',
            ],
          ],
          'path' => 'SecurityGroups[]',
        ],
      ],
      'Snapshots' => [
        'request' => [
          'operation' => 'DescribeSnapshots',
        ],
        'resource' => [
          'type' => 'Snapshot',
          'identifiers' => [
            [
              'target' => 'Id',
              'sourceType' => 'responsePath',
              'source' => 'Snapshots[].SnapshotId',
            ],
          ],
          'path' => 'Snapshots[]',
        ],
      ],
      'Subnets' => [
        'request' => [
          'operation' => 'DescribeSubnets',
        ],
        'resource' => [
          'type' => 'Subnet',
          'identifiers' => [
            [
              'target' => 'Id',
              'sourceType' => 'responsePath',
              'source' => 'Subnets[].SubnetId',
            ],
          ],
          'path' => 'Subnets[]',
        ],
      ],
      'Volumes' => [
        'request' => [
          'operation' => 'DescribeVolumes',
        ],
        'resource' => [
          'type' => 'Volume',
          'identifiers' => [
            [
              'target' => 'Id',
              'sourceType' => 'responsePath',
              'source' => 'Volumes[].VolumeId',
            ],
          ],
          'path' => 'Volumes[]',
        ],
      ],
      'VpcPeeringConnections' => [
        'request' => [
          'operation' => 'DescribeVpcPeeringConnections',
        ],
        'resource' => [
          'type' => 'VpcPeeringConnection',
          'identifiers' => [
            [
              'target' => 'Id',
              'sourceType' => 'responsePath',
              'source' => 'VpcPeeringConnections[].VpcPeeringConnectionId',
            ],
          ],
          'path' => 'VpcPeeringConnections[]',
        ],
      ],
      'Vpcs' => [
        'request' => [
          'operation' => 'DescribeVpcs',
        ],
        'resource' => [
          'type' => 'Vpc',
          'identifiers' => [
            [
              'target' => 'Id',
              'sourceType' => 'responsePath',
              'source' => 'Vpcs[].VpcId',
            ],
          ],
          'path' => 'Vpcs[]',
        ],
      ],
    ],
  ],
  'resources' => [
    'DhcpOptions' => [
      'identifiers' => [
        [
          'name' => 'Id',
          'memberName' => 'DhcpOptionsId',
        ],
      ],
      'shape' => 'DhcpOptions',
      'load' => [
        'request' => [
          'operation' => 'DescribeDhcpOptions',
          'params' => [
            [
              'target' => 'DhcpOptionsIds[0]',
              'sourceType' => 'identifier',
              'source' => 'Id',
            ],
          ],
        ],
        'path' => 'DhcpOptions[0]',
      ],
      'actions' => [
        'AssociateWithVpc' => [
          'request' => [
            'operation' => 'AssociateDhcpOptions',
            'params' => [
              [
                'target' => 'DhcpOptionsId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'CreateTags' => [
          'request' => [
            'operation' => 'CreateTags',
            'params' => [
              [
                'target' => 'Resources[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Tag',
            'identifiers' => [
              [
                'target' => 'ResourceId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
              [
                'target' => 'Key',
                'sourceType' => 'requestParameter',
                'source' => 'Tags[].Key',
              ],
              [
                'target' => 'Value',
                'sourceType' => 'requestParameter',
                'source' => 'Tags[].Value',
              ],
            ],
          ],
        ],
        'Delete' => [
          'request' => [
            'operation' => 'DeleteDhcpOptions',
            'params' => [
              [
                'target' => 'DhcpOptionsId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
      ],
    ],
    'Image' => [
      'identifiers' => [
        [
          'name' => 'Id',
          'memberName' => 'ImageId',
        ],
      ],
      'shape' => 'Image',
      'load' => [
        'request' => [
          'operation' => 'DescribeImages',
          'params' => [
            [
              'target' => 'ImageIds[0]',
              'sourceType' => 'identifier',
              'source' => 'Id',
            ],
          ],
        ],
        'path' => 'Images[0]',
      ],
      'actions' => [
        'CreateTags' => [
          'request' => [
            'operation' => 'CreateTags',
            'params' => [
              [
                'target' => 'Resources[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Tag',
            'identifiers' => [
              [
                'target' => 'ResourceId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
              [
                'target' => 'Key',
                'sourceType' => 'requestParameter',
                'source' => 'Tags[].Key',
              ],
              [
                'target' => 'Value',
                'sourceType' => 'requestParameter',
                'source' => 'Tags[].Value',
              ],
            ],
          ],
        ],
        'Deregister' => [
          'request' => [
            'operation' => 'DeregisterImage',
            'params' => [
              [
                'target' => 'ImageId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'DescribeAttribute' => [
          'request' => [
            'operation' => 'DescribeImageAttribute',
            'params' => [
              [
                'target' => 'ImageId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'ModifyAttribute' => [
          'request' => [
            'operation' => 'ModifyImageAttribute',
            'params' => [
              [
                'target' => 'ImageId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'ResetAttribute' => [
          'request' => [
            'operation' => 'ResetImageAttribute',
            'params' => [
              [
                'target' => 'ImageId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
      ],
    ],
    'Instance' => [
      'identifiers' => [
        [
          'name' => 'Id',
          'memberName' => 'InstanceId',
        ],
      ],
      'shape' => 'Instance',
      'load' => [
        'request' => [
          'operation' => 'DescribeInstances',
          'params' => [
            [
              'target' => 'InstanceIds[0]',
              'sourceType' => 'identifier',
              'source' => 'Id',
            ],
          ],
        ],
        'path' => 'Reservations[0].Instances[0]',
      ],
      'actions' => [
        'AttachVolume' => [
          'request' => [
            'operation' => 'AttachVolume',
            'params' => [
              [
                'target' => 'InstanceId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'ConsoleOutput' => [
          'request' => [
            'operation' => 'GetConsoleOutput',
            'params' => [
              [
                'target' => 'InstanceId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'CreateImage' => [
          'request' => [
            'operation' => 'CreateImage',
            'params' => [
              [
                'target' => 'InstanceId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Image',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'ImageId',
              ],
            ],
          ],
        ],
        'CreateTags' => [
          'request' => [
            'operation' => 'CreateTags',
            'params' => [
              [
                'target' => 'Resources[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Tag',
            'identifiers' => [
              [
                'target' => 'ResourceId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
              [
                'target' => 'Key',
                'sourceType' => 'requestParameter',
                'source' => 'Tags[].Key',
              ],
              [
                'target' => 'Value',
                'sourceType' => 'requestParameter',
                'source' => 'Tags[].Value',
              ],
            ],
          ],
        ],
        'DescribeAttribute' => [
          'request' => [
            'operation' => 'DescribeInstanceAttribute',
            'params' => [
              [
                'target' => 'InstanceId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'DetachVolume' => [
          'request' => [
            'operation' => 'DetachVolume',
            'params' => [
              [
                'target' => 'InstanceId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'ModifyAttribute' => [
          'request' => [
            'operation' => 'ModifyInstanceAttribute',
            'params' => [
              [
                'target' => 'InstanceId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'Monitor' => [
          'request' => [
            'operation' => 'MonitorInstances',
            'params' => [
              [
                'target' => 'InstanceIds[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'PasswordData' => [
          'request' => [
            'operation' => 'GetPasswordData',
            'params' => [
              [
                'target' => 'InstanceId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'Reboot' => [
          'request' => [
            'operation' => 'RebootInstances',
            'params' => [
              [
                'target' => 'InstanceIds[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'ReportStatus' => [
          'request' => [
            'operation' => 'ReportInstanceStatus',
            'params' => [
              [
                'target' => 'Instances[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'ResetAttribute' => [
          'request' => [
            'operation' => 'ResetInstanceAttribute',
            'params' => [
              [
                'target' => 'InstanceId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'ResetKernel' => [
          'request' => [
            'operation' => 'ResetInstanceAttribute',
            'params' => [
              [
                'target' => 'InstanceId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
              [
                'target' => 'Attribute',
                'sourceType' => 'string',
                'source' => 'kernel',
              ],
            ],
          ],
        ],
        'ResetRamdisk' => [
          'request' => [
            'operation' => 'ResetInstanceAttribute',
            'params' => [
              [
                'target' => 'InstanceId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
              [
                'target' => 'Attribute',
                'sourceType' => 'string',
                'source' => 'ramdisk',
              ],
            ],
          ],
        ],
        'ResetSourceDestCheck' => [
          'request' => [
            'operation' => 'ResetInstanceAttribute',
            'params' => [
              [
                'target' => 'InstanceId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
              [
                'target' => 'Attribute',
                'sourceType' => 'string',
                'source' => 'sourceDestCheck',
              ],
            ],
          ],
        ],
        'Start' => [
          'request' => [
            'operation' => 'StartInstances',
            'params' => [
              [
                'target' => 'InstanceIds[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'Stop' => [
          'request' => [
            'operation' => 'StopInstances',
            'params' => [
              [
                'target' => 'InstanceIds[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'Terminate' => [
          'request' => [
            'operation' => 'TerminateInstances',
            'params' => [
              [
                'target' => 'InstanceIds[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'Unmonitor' => [
          'request' => [
            'operation' => 'UnmonitorInstances',
            'params' => [
              [
                'target' => 'InstanceIds[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
      ],
      'batchActions' => [
        'CreateTags' => [
          'request' => [
            'operation' => 'CreateTags',
            'params' => [
              [
                'target' => 'Resources[]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'Monitor' => [
          'request' => [
            'operation' => 'MonitorInstances',
            'params' => [
              [
                'target' => 'InstanceIds[]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'Reboot' => [
          'request' => [
            'operation' => 'RebootInstances',
            'params' => [
              [
                'target' => 'InstanceIds[]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'Start' => [
          'request' => [
            'operation' => 'StartInstances',
            'params' => [
              [
                'target' => 'InstanceIds[]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'Stop' => [
          'request' => [
            'operation' => 'StopInstances',
            'params' => [
              [
                'target' => 'InstanceIds[]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'Terminate' => [
          'request' => [
            'operation' => 'TerminateInstances',
            'params' => [
              [
                'target' => 'InstanceIds[]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'Unmonitor' => [
          'request' => [
            'operation' => 'UnmonitorInstances',
            'params' => [
              [
                'target' => 'InstanceIds[]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
      ],
      'waiters' => [
        'Running' => [
          'waiterName' => 'InstanceRunning',
          'params' => [
            [
              'target' => 'InstanceIds[]',
              'sourceType' => 'identifier',
              'source' => 'Id',
            ],
          ],
          'path' => 'Reservations[0].Instances[0]',
        ],
        'Stopped' => [
          'waiterName' => 'InstanceStopped',
          'params' => [
            [
              'target' => 'InstanceIds[]',
              'sourceType' => 'identifier',
              'source' => 'Id',
            ],
          ],
          'path' => 'Reservations[0].Instances[0]',
        ],
        'Terminated' => [
          'waiterName' => 'InstanceTerminated',
          'params' => [
            [
              'target' => 'InstanceIds[]',
              'sourceType' => 'identifier',
              'source' => 'Id',
            ],
          ],
          'path' => 'Reservations[0].Instances[0]',
        ],
      ],
      'hasMany' => [
        'Volumes' => [
          'request' => [
            'operation' => 'DescribeVolumes',
            'params' => [
              [
                'target' => 'Filters[0].Name',
                'sourceType' => 'string',
                'source' => 'attachment.instance-id',
              ],
              [
                'target' => 'Filters[0].Values[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Volume',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'Volumes[].VolumeId',
              ],
            ],
            'path' => 'Volumes[]',
          ],
        ],
      ],
      'belongsTo' => [
        'Image' => [
          'resource' => [
            'type' => 'Image',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'dataMember',
                'source' => 'ImageId',
              ],
            ],
          ],
        ],
        'KeyPair' => [
          'resource' => [
            'type' => 'KeyPair',
            'identifiers' => [
              [
                'target' => 'Name',
                'sourceType' => 'dataMember',
                'source' => 'KeyName',
              ],
            ],
          ],
        ],
        'PlacementGroup' => [
          'resource' => [
            'type' => 'PlacementGroup',
            'identifiers' => [
              [
                'target' => 'Name',
                'sourceType' => 'dataMember',
                'source' => 'Placement.GroupName',
              ],
            ],
          ],
        ],
        'Subnet' => [
          'resource' => [
            'type' => 'Subnet',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'dataMember',
                'source' => 'SubnetId',
              ],
            ],
          ],
        ],
        'Vpc' => [
          'resource' => [
            'type' => 'Vpc',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'dataMember',
                'source' => 'VpcId',
              ],
            ],
          ],
        ],
      ],
    ],
    'InternetGateway' => [
      'identifiers' => [
        [
          'name' => 'Id',
          'memberName' => 'InternetGatewayId',
        ],
      ],
      'shape' => 'InternetGateway',
      'load' => [
        'request' => [
          'operation' => 'DescribeInternetGateways',
          'params' => [
            [
              'target' => 'InternetGatewayIds[0]',
              'sourceType' => 'identifier',
              'source' => 'Id',
            ],
          ],
        ],
        'path' => 'InternetGateways[0]',
      ],
      'actions' => [
        'AttachToVpc' => [
          'request' => [
            'operation' => 'AttachInternetGateway',
            'params' => [
              [
                'target' => 'InternetGatewayId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'CreateTags' => [
          'request' => [
            'operation' => 'CreateTags',
            'params' => [
              [
                'target' => 'Resources[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Tag',
            'identifiers' => [
              [
                'target' => 'ResourceId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
              [
                'target' => 'Key',
                'sourceType' => 'requestParameter',
                'source' => 'Tags[].Key',
              ],
              [
                'target' => 'Value',
                'sourceType' => 'requestParameter',
                'source' => 'Tags[].Value',
              ],
            ],
          ],
        ],
        'Delete' => [
          'request' => [
            'operation' => 'DeleteInternetGateway',
            'params' => [
              [
                'target' => 'InternetGatewayId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'DetachFromVpc' => [
          'request' => [
            'operation' => 'DetachInternetGateway',
            'params' => [
              [
                'target' => 'InternetGatewayId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
      ],
    ],
    'KeyPair' => [
      'identifiers' => [
        [
          'name' => 'Name',
          'memberName' => 'KeyName',
        ],
      ],
      'shape' => 'KeyPairInfo',
      'load' => [
        'request' => [
          'operation' => 'DescribeKeyPairs',
          'params' => [
            [
              'target' => 'KeyNames[0]',
              'sourceType' => 'identifier',
              'source' => 'Name',
            ],
          ],
        ],
        'path' => 'KeyPairs[0]',
      ],
      'actions' => [
        'Delete' => [
          'request' => [
            'operation' => 'DeleteKeyPair',
            'params' => [
              [
                'target' => 'KeyName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
      ],
    ],
    'NetworkAcl' => [
      'identifiers' => [
        [
          'name' => 'Id',
          'memberName' => 'NetworkAclId',
        ],
      ],
      'shape' => 'NetworkAcl',
      'load' => [
        'request' => [
          'operation' => 'DescribeNetworkAcls',
          'params' => [
            [
              'target' => 'NetworkAclIds[0]',
              'sourceType' => 'identifier',
              'source' => 'Id',
            ],
          ],
        ],
        'path' => 'NetworkAcls[0]',
      ],
      'actions' => [
        'CreateEntry' => [
          'request' => [
            'operation' => 'CreateNetworkAclEntry',
            'params' => [
              [
                'target' => 'NetworkAclId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'CreateTags' => [
          'request' => [
            'operation' => 'CreateTags',
            'params' => [
              [
                'target' => 'Resources[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Tag',
            'identifiers' => [
              [
                'target' => 'ResourceId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
              [
                'target' => 'Key',
                'sourceType' => 'requestParameter',
                'source' => 'Tags[].Key',
              ],
              [
                'target' => 'Value',
                'sourceType' => 'requestParameter',
                'source' => 'Tags[].Value',
              ],
            ],
          ],
        ],
        'Delete' => [
          'request' => [
            'operation' => 'DeleteNetworkAcl',
            'params' => [
              [
                'target' => 'NetworkAclId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'DeleteEntry' => [
          'request' => [
            'operation' => 'DeleteNetworkAclEntry',
            'params' => [
              [
                'target' => 'NetworkAclId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'ReplaceAssociation' => [
          'request' => [
            'operation' => 'ReplaceNetworkAclAssociation',
            'params' => [
              [
                'target' => 'NetworkAclId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'ReplaceEntry' => [
          'request' => [
            'operation' => 'ReplaceNetworkAclEntry',
            'params' => [
              [
                'target' => 'NetworkAclId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
      ],
      'belongsTo' => [
        'Vpc' => [
          'resource' => [
            'type' => 'Vpc',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'dataMember',
                'source' => 'VpcId',
              ],
            ],
          ],
        ],
      ],
    ],
    'NetworkInterface' => [
      'identifiers' => [
        [
          'name' => 'Id',
          'memberName' => 'NetworkInterfaceId',
        ],
      ],
      'shape' => 'NetworkInterface',
      'load' => [
        'request' => [
          'operation' => 'DescribeNetworkInterfaces',
          'params' => [
            [
              'target' => 'NetworkInterfaceIds[0]',
              'sourceType' => 'identifier',
              'source' => 'Id',
            ],
          ],
        ],
        'path' => 'NetworkInterfaces[0]',
      ],
      'actions' => [
        'AssignPrivateIpAddresses' => [
          'request' => [
            'operation' => 'AssignPrivateIpAddresses',
            'params' => [
              [
                'target' => 'NetworkInterfaceId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'Attach' => [
          'request' => [
            'operation' => 'AttachNetworkInterface',
            'params' => [
              [
                'target' => 'NetworkInterfaceId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'CreateTags' => [
          'request' => [
            'operation' => 'CreateTags',
            'params' => [
              [
                'target' => 'Resources[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Tag',
            'identifiers' => [
              [
                'target' => 'ResourceId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
              [
                'target' => 'Key',
                'sourceType' => 'requestParameter',
                'source' => 'Tags[].Key',
              ],
              [
                'target' => 'Value',
                'sourceType' => 'requestParameter',
                'source' => 'Tags[].Value',
              ],
            ],
          ],
        ],
        'Delete' => [
          'request' => [
            'operation' => 'DeleteNetworkInterface',
            'params' => [
              [
                'target' => 'NetworkInterfaceId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'DescribeAttribute' => [
          'request' => [
            'operation' => 'DescribeNetworkInterfaceAttribute',
            'params' => [
              [
                'target' => 'NetworkInterfaceId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'Detach' => [
          'request' => [
            'operation' => 'DetachNetworkInterface',
            'params' => [
              [
                'target' => 'AttachmentId',
                'sourceType' => 'dataMember',
                'source' => 'Attachment.AttachmentId',
              ],
            ],
          ],
        ],
        'ModifyAttribute' => [
          'request' => [
            'operation' => 'ModifyNetworkInterfaceAttribute',
            'params' => [
              [
                'target' => 'NetworkInterfaceId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'ResetAttribute' => [
          'request' => [
            'operation' => 'ResetNetworkInterfaceAttribute',
            'params' => [
              [
                'target' => 'NetworkInterfaceId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'UnassignPrivateIpAddresses' => [
          'request' => [
            'operation' => 'UnassignPrivateIpAddresses',
            'params' => [
              [
                'target' => 'NetworkInterfaceId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
      ],
      'belongsTo' => [
        'Subnet' => [
          'resource' => [
            'type' => 'Subnet',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'dataMember',
                'source' => 'SubnetId',
              ],
            ],
          ],
        ],
        'Vpc' => [
          'resource' => [
            'type' => 'Vpc',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'dataMember',
                'source' => 'VpcId',
              ],
            ],
          ],
        ],
      ],
    ],
    'PlacementGroup' => [
      'identifiers' => [
        [
          'name' => 'Name',
          'memberName' => 'GroupName',
        ],
      ],
      'shape' => 'PlacementGroup',
      'load' => [
        'request' => [
          'operation' => 'DescribePlacementGroups',
          'params' => [
            [
              'target' => 'GroupNames[0]',
              'sourceType' => 'identifier',
              'source' => 'Name',
            ],
          ],
        ],
        'path' => 'PlacementGroups[0]',
      ],
      'actions' => [
        'Delete' => [
          'request' => [
            'operation' => 'DeletePlacementGroup',
            'params' => [
              [
                'target' => 'GroupName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
      ],
      'hasMany' => [
        'Instances' => [
          'request' => [
            'operation' => 'DescribeInstances',
            'params' => [
              [
                'target' => 'Filters[0].Name',
                'sourceType' => 'string',
                'source' => 'placement-group-name',
              ],
              [
                'target' => 'Filters[0].Values[0]',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Instance',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'Reservations[].Instances[].InstanceId',
              ],
            ],
            'path' => 'Reservations[].Instances[]',
          ],
        ],
      ],
    ],
    'RouteTable' => [
      'identifiers' => [
        [
          'name' => 'Id',
          'memberName' => 'RouteTableId',
        ],
      ],
      'shape' => 'RouteTable',
      'load' => [
        'request' => [
          'operation' => 'DescribeRouteTables',
          'params' => [
            [
              'target' => 'RouteTableIds[0]',
              'sourceType' => 'identifier',
              'source' => 'Id',
            ],
          ],
        ],
        'path' => 'RouteTables[0]',
      ],
      'actions' => [
        'AssociateWithSubnet' => [
          'request' => [
            'operation' => 'AssociateRouteTable',
            'params' => [
              [
                'target' => 'RouteTableId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'RouteTableAssociation',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'AssociationId',
              ],
            ],
          ],
        ],
        'CreateRoute' => [
          'request' => [
            'operation' => 'CreateRoute',
            'params' => [
              [
                'target' => 'RouteTableId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'CreateTags' => [
          'request' => [
            'operation' => 'CreateTags',
            'params' => [
              [
                'target' => 'Resources[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Tag',
            'identifiers' => [
              [
                'target' => 'ResourceId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
              [
                'target' => 'Key',
                'sourceType' => 'requestParameter',
                'source' => 'Tags[].Key',
              ],
              [
                'target' => 'Value',
                'sourceType' => 'requestParameter',
                'source' => 'Tags[].Value',
              ],
            ],
          ],
        ],
      ],
      'hasMany' => [
        'Associations' => [
          'request' => [
            'operation' => 'DescribeRouteTables',
            'params' => [
              [
                'target' => 'RouteTableIds[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'RouteTableAssociation',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'RouteTables[0].Associations[].RouteTableAssociationId',
              ],
            ],
            'path' => 'RouteTables[0].Associations[]',
          ],
        ],
      ],
      'belongsTo' => [
        'Vpc' => [
          'resource' => [
            'type' => 'Vpc',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'dataMember',
                'source' => 'VpcId',
              ],
            ],
          ],
        ],
      ],
    ],
    'RouteTableAssociation' => [
      'identifiers' => [
        [
          'name' => 'Id',
          'memberName' => 'RouteTableAssociationId',
        ],
      ],
      'shape' => 'RouteTableAssociation',
      'actions' => [
        'Delete' => [
          'request' => [
            'operation' => 'DisassociateRouteTable',
            'params' => [
              [
                'target' => 'AssociationId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'ReplaceSubnet' => [
          'request' => [
            'operation' => 'ReplaceRouteTableAssociation',
            'params' => [
              [
                'target' => 'AssociationId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'RouteTableAssociation',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'NewAssociationId',
              ],
            ],
          ],
        ],
      ],
      'belongsTo' => [
        'RouteTable' => [
          'resource' => [
            'type' => 'RouteTable',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'dataMember',
                'source' => 'RouteTableId',
              ],
            ],
          ],
        ],
        'Subnet' => [
          'resource' => [
            'type' => 'Subnet',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'dataMember',
                'source' => 'SubnetId',
              ],
            ],
          ],
        ],
      ],
    ],
    'SecurityGroup' => [
      'identifiers' => [
        [
          'name' => 'Id',
          'memberName' => 'GroupId',
        ],
      ],
      'shape' => 'SecurityGroup',
      'load' => [
        'request' => [
          'operation' => 'DescribeSecurityGroups',
          'params' => [
            [
              'target' => 'GroupIds[0]',
              'sourceType' => 'identifier',
              'source' => 'Id',
            ],
          ],
        ],
        'path' => 'SecurityGroups[0]',
      ],
      'actions' => [
        'AuthorizeEgress' => [
          'request' => [
            'operation' => 'AuthorizeSecurityGroupEgress',
            'params' => [
              [
                'target' => 'GroupId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'AuthorizeIngress' => [
          'request' => [
            'operation' => 'AuthorizeSecurityGroupIngress',
            'params' => [
              [
                'target' => 'GroupId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'CreateTags' => [
          'request' => [
            'operation' => 'CreateTags',
            'params' => [
              [
                'target' => 'Resources[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Tag',
            'identifiers' => [
              [
                'target' => 'ResourceId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
              [
                'target' => 'Key',
                'sourceType' => 'requestParameter',
                'source' => 'Tags[].Key',
              ],
              [
                'target' => 'Value',
                'sourceType' => 'requestParameter',
                'source' => 'Tags[].Value',
              ],
            ],
          ],
        ],
        'Delete' => [
          'request' => [
            'operation' => 'DeleteSecurityGroup',
            'params' => [
              [
                'target' => 'GroupId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'RevokeEgress' => [
          'request' => [
            'operation' => 'RevokeSecurityGroupEgress',
            'params' => [
              [
                'target' => 'GroupId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'RevokeIngress' => [
          'request' => [
            'operation' => 'RevokeSecurityGroupIngress',
            'params' => [
              [
                'target' => 'GroupId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
      ],
    ],
    'Snapshot' => [
      'identifiers' => [
        [
          'name' => 'Id',
          'memberName' => 'SnapshotId',
        ],
      ],
      'shape' => 'Snapshot',
      'load' => [
        'request' => [
          'operation' => 'DescribeSnapshots',
          'params' => [
            [
              'target' => 'SnapshotIds[0]',
              'sourceType' => 'identifier',
              'source' => 'Id',
            ],
          ],
        ],
        'path' => 'Snapshots[0]',
      ],
      'actions' => [
        'Copy' => [
          'request' => [
            'operation' => 'CopySnapshot',
            'params' => [
              [
                'target' => 'SourceSnapshotId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'CreateTags' => [
          'request' => [
            'operation' => 'CreateTags',
            'params' => [
              [
                'target' => 'Resources[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Tag',
            'identifiers' => [
              [
                'target' => 'ResourceId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
              [
                'target' => 'Key',
                'sourceType' => 'requestParameter',
                'source' => 'Tags[].Key',
              ],
              [
                'target' => 'Value',
                'sourceType' => 'requestParameter',
                'source' => 'Tags[].Value',
              ],
            ],
          ],
        ],
        'Delete' => [
          'request' => [
            'operation' => 'DeleteSnapshot',
            'params' => [
              [
                'target' => 'SnapshotId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'DescribeAttribute' => [
          'request' => [
            'operation' => 'DescribeSnapshotAttribute',
            'params' => [
              [
                'target' => 'SnapshotId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'ModifyAttribute' => [
          'request' => [
            'operation' => 'ModifySnapshotAttribute',
            'params' => [
              [
                'target' => 'SnapshotId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'ResetAttribute' => [
          'request' => [
            'operation' => 'ResetSnapshotAttribute',
            'params' => [
              [
                'target' => 'SnapshotId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
      ],
      'belongsTo' => [
        'Volume' => [
          'resource' => [
            'type' => 'Volume',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'dataMember',
                'source' => 'VolumeId',
              ],
            ],
          ],
        ],
      ],
    ],
    'Subnet' => [
      'identifiers' => [
        [
          'name' => 'Id',
          'memberName' => 'SubnetId',
        ],
      ],
      'shape' => 'Subnet',
      'load' => [
        'request' => [
          'operation' => 'DescribeSubnets',
          'params' => [
            [
              'target' => 'SubnetIds[0]',
              'sourceType' => 'identifier',
              'source' => 'Id',
            ],
          ],
        ],
        'path' => 'Subnets[0]',
      ],
      'actions' => [
        'CreateInstances' => [
          'request' => [
            'operation' => 'RunInstances',
            'params' => [
              [
                'target' => 'SubnetId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Instance',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'Instances[].InstanceId',
              ],
            ],
            'path' => 'Instances[]',
          ],
        ],
        'CreateNetworkInterface' => [
          'request' => [
            'operation' => 'CreateNetworkInterface',
            'params' => [
              [
                'target' => 'SubnetId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'NetworkInterface',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'NetworkInterface.NetworkInterfaceId',
              ],
            ],
            'path' => 'NetworkInterface',
          ],
        ],
        'CreateTags' => [
          'request' => [
            'operation' => 'CreateTags',
            'params' => [
              [
                'target' => 'Resources[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Tag',
            'identifiers' => [
              [
                'target' => 'ResourceId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
              [
                'target' => 'Key',
                'sourceType' => 'requestParameter',
                'source' => 'Tags[].Key',
              ],
              [
                'target' => 'Value',
                'sourceType' => 'requestParameter',
                'source' => 'Tags[].Value',
              ],
            ],
          ],
        ],
        'Delete' => [
          'request' => [
            'operation' => 'DeleteSubnet',
            'params' => [
              [
                'target' => 'SubnetId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
      ],
      'hasMany' => [
        'Instances' => [
          'request' => [
            'operation' => 'DescribeInstances',
            'params' => [
              [
                'target' => 'Filters[0].Name',
                'sourceType' => 'string',
                'source' => 'subnet-id',
              ],
              [
                'target' => 'Filters[0].Values[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Instance',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'Reservations[].Instances[].InstanceId',
              ],
            ],
            'path' => 'Reservations[].Instances[]',
          ],
        ],
        'NetworkInterfaces' => [
          'request' => [
            'operation' => 'DescribeNetworkInterfaces',
            'params' => [
              [
                'target' => 'Filters[0].Name',
                'sourceType' => 'string',
                'source' => 'subnet-id',
              ],
              [
                'target' => 'Filters[0].Values[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'NetworkInterface',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'NetworkInterfaces[].NetworkInterfaceId',
              ],
            ],
            'path' => 'NetworkInterfaces[]',
          ],
        ],
      ],
      'belongsTo' => [
        'Vpc' => [
          'resource' => [
            'type' => 'Vpc',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'dataMember',
                'source' => 'VpcId',
              ],
            ],
          ],
        ],
      ],
    ],
    'Tag' => [
      'identifiers' => [
        [
          'name' => 'ResourceId',
          'memberName' => 'ResourceId',
        ],
        [
          'name' => 'Key',
          'memberName' => 'Key',
        ],
        [
          'name' => 'Value',
          'memberName' => 'Value',
        ],
      ],
      'shape' => 'TagDescription',
      'load' => [
        'request' => [
          'operation' => 'DescribeTags',
          'params' => [
            [
              'target' => 'Filters[0].Name',
              'sourceType' => 'string',
              'source' => 'key',
            ],
            [
              'target' => 'Filters[0].Values[0]',
              'sourceType' => 'identifier',
              'source' => 'Key',
            ],
            [
              'target' => 'Filters[1].Name',
              'sourceType' => 'string',
              'source' => 'value',
            ],
            [
              'target' => 'Filters[1].Values[0]',
              'sourceType' => 'identifier',
              'source' => 'Value',
            ],
          ],
        ],
        'path' => 'Tags[0]',
      ],
      'actions' => [
        'Delete' => [
          'request' => [
            'operation' => 'DeleteTags',
            'params' => [
              [
                'target' => 'Resources[0]',
                'sourceType' => 'identifier',
                'source' => 'ResourceId',
              ],
              [
                'target' => 'Tags[0].Key',
                'sourceType' => 'identifier',
                'source' => 'Key',
              ],
              [
                'target' => 'Tags[0].Value',
                'sourceType' => 'identifier',
                'source' => 'Value',
              ],
            ],
          ],
        ],
      ],
      'batchActions' => [
        'Delete' => [
          'request' => [
            'operation' => 'DeleteTags',
            'params' => [
              [
                'target' => 'Resources[]',
                'sourceType' => 'identifier',
                'source' => 'ResourceId',
              ],
              [
                'target' => 'Tags[*].Key',
                'sourceType' => 'identifier',
                'source' => 'Key',
              ],
              [
                'target' => 'Tags[*].Value',
                'sourceType' => 'identifier',
                'source' => 'Value',
              ],
            ],
          ],
        ],
      ],
    ],
    'Volume' => [
      'identifiers' => [
        [
          'name' => 'Id',
          'memberName' => 'VolumeId',
        ],
      ],
      'shape' => 'Volume',
      'load' => [
        'request' => [
          'operation' => 'DescribeVolumes',
          'params' => [
            [
              'target' => 'VolumeIds[0]',
              'sourceType' => 'identifier',
              'source' => 'Id',
            ],
          ],
        ],
        'path' => 'Volumes[0]',
      ],
      'actions' => [
        'AttachToInstance' => [
          'request' => [
            'operation' => 'AttachVolume',
            'params' => [
              [
                'target' => 'VolumeId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'CreateSnapshot' => [
          'request' => [
            'operation' => 'CreateSnapshot',
            'params' => [
              [
                'target' => 'VolumeId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Snapshot',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'SnapshotId',
              ],
            ],
            'path' => '$',
          ],
        ],
        'CreateTags' => [
          'request' => [
            'operation' => 'CreateTags',
            'params' => [
              [
                'target' => 'Resources[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Tag',
            'identifiers' => [
              [
                'target' => 'ResourceId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
              [
                'target' => 'Key',
                'sourceType' => 'requestParameter',
                'source' => 'Tags[].Key',
              ],
              [
                'target' => 'Value',
                'sourceType' => 'requestParameter',
                'source' => 'Tags[].Value',
              ],
            ],
          ],
        ],
        'DescribeAttribute' => [
          'request' => [
            'operation' => 'DescribeVolumeAttribute',
            'params' => [
              [
                'target' => 'VolumeId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'DescribeStatus' => [
          'request' => [
            'operation' => 'DescribeVolumeStatus',
            'params' => [
              [
                'target' => 'VolumeIds[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'DetachFromInstance' => [
          'request' => [
            'operation' => 'DetachVolume',
            'params' => [
              [
                'target' => 'VolumeId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'EnableIo' => [
          'request' => [
            'operation' => 'EnableVolumeIO',
            'params' => [
              [
                'target' => 'VolumeId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'ModifyAttribute' => [
          'request' => [
            'operation' => 'ModifyVolumeAttribute',
            'params' => [
              [
                'target' => 'VolumeId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
      ],
      'hasMany' => [
        'Snapshots' => [
          'request' => [
            'operation' => 'DescribeSnapshots',
            'params' => [
              [
                'target' => 'Filters[0].Name',
                'sourceType' => 'string',
                'source' => 'volume-id',
              ],
              [
                'target' => 'Filters[0].Values[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Snapshot',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'Snapshots[].SnapshotId',
              ],
            ],
            'path' => 'Snapshots[]',
          ],
        ],
      ],
    ],
    'Vpc' => [
      'identifiers' => [
        [
          'name' => 'Id',
          'memberName' => 'VpcId',
        ],
      ],
      'shape' => 'Vpc',
      'load' => [
        'request' => [
          'operation' => 'DescribeVpcs',
          'params' => [
            [
              'target' => 'VpcIds[0]',
              'sourceType' => 'identifier',
              'source' => 'Id',
            ],
          ],
        ],
        'path' => 'Vpcs[0]',
      ],
      'actions' => [
        'AssociateDhcpOptions' => [
          'request' => [
            'operation' => 'AssociateDhcpOptions',
            'params' => [
              [
                'target' => 'VpcId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'AttachInternetGateway' => [
          'request' => [
            'operation' => 'AttachInternetGateway',
            'params' => [
              [
                'target' => 'VpcId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'CreateNetworkAcl' => [
          'request' => [
            'operation' => 'CreateNetworkAcl',
            'params' => [
              [
                'target' => 'VpcId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'NetworkAcl',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'NetworkAcl.NetworkAclId',
              ],
            ],
            'path' => 'NetworkAcl',
          ],
        ],
        'CreateRouteTable' => [
          'request' => [
            'operation' => 'CreateRouteTable',
            'params' => [
              [
                'target' => 'VpcId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'RouteTable',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'RouteTable.RouteTableId',
              ],
            ],
            'path' => 'RouteTable',
          ],
        ],
        'CreateSecurityGroup' => [
          'request' => [
            'operation' => 'CreateSecurityGroup',
            'params' => [
              [
                'target' => 'VpcId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'SecurityGroup',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'GroupId',
              ],
            ],
          ],
        ],
        'CreateSubnet' => [
          'request' => [
            'operation' => 'CreateSubnet',
            'params' => [
              [
                'target' => 'VpcId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Subnet',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'Subnet.SubnetId',
              ],
            ],
            'path' => 'Subnet',
          ],
        ],
        'CreateTags' => [
          'request' => [
            'operation' => 'CreateTags',
            'params' => [
              [
                'target' => 'Resources[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Tag',
            'identifiers' => [
              [
                'target' => 'ResourceId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
              [
                'target' => 'Key',
                'sourceType' => 'requestParameter',
                'source' => 'Tags[].Key',
              ],
              [
                'target' => 'Value',
                'sourceType' => 'requestParameter',
                'source' => 'Tags[].Value',
              ],
            ],
          ],
        ],
        'Delete' => [
          'request' => [
            'operation' => 'DeleteVpc',
            'params' => [
              [
                'target' => 'VpcId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'DescribeAttribute' => [
          'request' => [
            'operation' => 'DescribeVpcAttribute',
            'params' => [
              [
                'target' => 'VpcId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'DetachInternetGateway' => [
          'request' => [
            'operation' => 'DetachInternetGateway',
            'params' => [
              [
                'target' => 'VpcId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'ModifyAttribute' => [
          'request' => [
            'operation' => 'ModifyVpcAttribute',
            'params' => [
              [
                'target' => 'VpcId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'RequestVpcPeeringConnection' => [
          'request' => [
            'operation' => 'CreateVpcPeeringConnection',
            'params' => [
              [
                'target' => 'VpcId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'VpcPeeringConnection',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'VpcPeeringConnection.VpcPeeringConnectionId',
              ],
            ],
            'path' => 'VpcPeeringConnection',
          ],
        ],
      ],
      'hasMany' => [
        'AcceptedVpcPeeringConnections' => [
          'request' => [
            'operation' => 'DescribeVpcPeeringConnections',
            'params' => [
              [
                'target' => 'Filters[0].Name',
                'sourceType' => 'string',
                'source' => 'accepter-vpc-info.vpc-id',
              ],
              [
                'target' => 'Filters[0].Values[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'VpcPeeringConnection',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'VpcPeeringConnections[].VpcPeeringConnectionId',
              ],
            ],
            'path' => 'VpcPeeringConnections[]',
          ],
        ],
        'Instances' => [
          'request' => [
            'operation' => 'DescribeInstances',
            'params' => [
              [
                'target' => 'Filters[0].Name',
                'sourceType' => 'string',
                'source' => 'vpc-id',
              ],
              [
                'target' => 'Filters[0].Values[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Instance',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'Reservations[].Instances[].InstanceId',
              ],
            ],
            'path' => 'Reservations[].Instances[]',
          ],
        ],
        'InternetGateways' => [
          'request' => [
            'operation' => 'DescribeInternetGateways',
            'params' => [
              [
                'target' => 'Filters[0].Name',
                'sourceType' => 'string',
                'source' => 'attachment.vpc-id',
              ],
              [
                'target' => 'Filters[0].Values[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'InternetGateway',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'InternetGateways[].InternetGatewayId',
              ],
            ],
            'path' => 'InternetGateways[]',
          ],
        ],
        'NetworkAcls' => [
          'request' => [
            'operation' => 'DescribeNetworkAcls',
            'params' => [
              [
                'target' => 'Filters[0].Name',
                'sourceType' => 'string',
                'source' => 'vpc-id',
              ],
              [
                'target' => 'Filters[0].Values[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'NetworkAcl',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'NetworkAcls[].NetworkAclId',
              ],
            ],
            'path' => 'NetworkAcls[]',
          ],
        ],
        'NetworkInterfaces' => [
          'request' => [
            'operation' => 'DescribeNetworkInterfaces',
            'params' => [
              [
                'target' => 'Filters[0].Name',
                'sourceType' => 'string',
                'source' => 'vpc-id',
              ],
              [
                'target' => 'Filters[0].Values[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'NetworkInterface',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'NetworkInterfaces[].NetworkInterfaceId',
              ],
            ],
            'path' => 'NetworkInterfaces[]',
          ],
        ],
        'RequestedVpcPeeringConnections' => [
          'request' => [
            'operation' => 'DescribeVpcPeeringConnections',
            'params' => [
              [
                'target' => 'Filters[0].Name',
                'sourceType' => 'string',
                'source' => 'requester-vpc-info.vpc-id',
              ],
              [
                'target' => 'Filters[0].Values[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'VpcPeeringConnection',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'VpcPeeringConnections[].VpcPeeringConnectionId',
              ],
            ],
            'path' => 'VpcPeeringConnections[]',
          ],
        ],
        'RouteTables' => [
          'request' => [
            'operation' => 'DescribeRouteTables',
            'params' => [
              [
                'target' => 'Filters[0].Name',
                'sourceType' => 'string',
                'source' => 'vpc-id',
              ],
              [
                'target' => 'Filters[0].Values[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'RouteTable',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'RouteTables[].RouteTableId',
              ],
            ],
            'path' => 'RouteTables[]',
          ],
        ],
        'SecurityGroups' => [
          'request' => [
            'operation' => 'DescribeSecurityGroups',
            'params' => [
              [
                'target' => 'Filters[0].Name',
                'sourceType' => 'string',
                'source' => 'vpc-id',
              ],
              [
                'target' => 'Filters[0].Values[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'SecurityGroup',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'SecurityGroups[].GroupId',
              ],
            ],
            'path' => 'SecurityGroups[]',
          ],
        ],
        'Subnets' => [
          'request' => [
            'operation' => 'DescribeSubnets',
            'params' => [
              [
                'target' => 'Filters[0].Name',
                'sourceType' => 'string',
                'source' => 'vpc-id',
              ],
              [
                'target' => 'Filters[0].Values[0]',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Subnet',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'Subnets[].SubnetId',
              ],
            ],
            'path' => 'Subnets[]',
          ],
        ],
      ],
      'belongsTo' => [
        'DhcpOptions' => [
          'resource' => [
            'type' => 'DhcpOptions',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'dataMember',
                'source' => 'DhcpOptionsId',
              ],
            ],
          ],
        ],
      ],
    ],
    'VpcPeeringConnection' => [
      'identifiers' => [
        [
          'name' => 'Id',
          'memberName' => 'VpcPeeringConnectionId',
        ],
      ],
      'shape' => 'VpcPeeringConnection',
      'load' => [
        'request' => [
          'operation' => 'DescribeVpcPeeringConnections',
          'params' => [
            [
              'target' => 'VpcPeeringConnectionIds[0]',
              'sourceType' => 'identifier',
              'source' => 'Id',
            ],
          ],
        ],
        'path' => 'VpcPeeringConnections[0]',
      ],
      'actions' => [
        'Accept' => [
          'request' => [
            'operation' => 'AcceptVpcPeeringConnection',
            'params' => [
              [
                'target' => 'VpcPeeringConnectionId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'Delete' => [
          'request' => [
            'operation' => 'DeleteVpcPeeringConnection',
            'params' => [
              [
                'target' => 'VpcPeeringConnectionId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
        'Reject' => [
          'request' => [
            'operation' => 'RejectVpcPeeringConnection',
            'params' => [
              [
                'target' => 'VpcPeeringConnectionId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
      ],
      'belongsTo' => [
        'AccepterVpc' => [
          'resource' => [
            'type' => 'Vpc',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'dataMember',
                'source' => 'AccepterVpcInfo.VpcId',
              ],
            ],
          ],
        ],
        'RequesterVpc' => [
          'resource' => [
            'type' => 'Vpc',
            'identifiers' => [
              [
                'target' => 'Id',
                'sourceType' => 'dataMember',
                'source' => 'RequesterVpcInfo.VpcId',
              ],
            ],
          ],
        ],
      ],
    ],
  ],
];
