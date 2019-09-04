<?php return [
  'service' => [
    'actions' => [
      'ChangePassword' => [
        'request' => [
          'operation' => 'ChangePassword',
        ],
      ],
      'CreateAccountAlias' => [
        'request' => [
          'operation' => 'CreateAccountAlias',
        ],
        'resource' => [
          'type' => 'AccountAlias',
          'identifiers' => [
            [
              'target' => 'Name',
              'sourceType' => 'requestParameter',
              'source' => 'AccountAlias',
            ],
          ],
        ],
      ],
      'CreateAccountPasswordPolicy' => [
        'request' => [
          'operation' => 'UpdateAccountPasswordPolicy',
        ],
        'resource' => [
          'type' => 'AccountPasswordPolicy',
          'identifiers' => [
          ],
        ],
      ],
      'CreateGroup' => [
        'request' => [
          'operation' => 'CreateGroup',
        ],
        'resource' => [
          'type' => 'Group',
          'identifiers' => [
            [
              'target' => 'Name',
              'sourceType' => 'requestParameter',
              'source' => 'GroupName',
            ],
          ],
          'path' => 'Group',
        ],
      ],
      'CreateInstanceProfile' => [
        'request' => [
          'operation' => 'CreateInstanceProfile',
        ],
        'resource' => [
          'type' => 'InstanceProfile',
          'identifiers' => [
            [
              'target' => 'Name',
              'sourceType' => 'requestParameter',
              'source' => 'InstanceProfileName',
            ],
          ],
          'path' => 'InstanceProfile',
        ],
      ],
      'CreateRole' => [
        'request' => [
          'operation' => 'CreateRole',
        ],
        'resource' => [
          'type' => 'Role',
          'identifiers' => [
            [
              'target' => 'Name',
              'sourceType' => 'requestParameter',
              'source' => 'RoleName',
            ],
          ],
          'path' => 'Role',
        ],
      ],
      'CreateSamlProvider' => [
        'request' => [
          'operation' => 'CreateSAMLProvider',
        ],
        'resource' => [
          'type' => 'SamlProvider',
          'identifiers' => [
            [
              'target' => 'Arn',
              'sourceType' => 'responsePath',
              'source' => 'SAMLProviderArn',
            ],
          ],
        ],
      ],
      'CreateServerCertificate' => [
        'request' => [
          'operation' => 'UploadServerCertificate',
        ],
        'resource' => [
          'type' => 'ServerCertificate',
          'identifiers' => [
            [
              'target' => 'Name',
              'sourceType' => 'requestParameter',
              'source' => 'ServerCertificateName',
            ],
          ],
        ],
      ],
      'CreateSigningCertificate' => [
        'request' => [
          'operation' => 'UploadSigningCertificate',
        ],
        'resource' => [
          'type' => 'SigningCertificate',
          'identifiers' => [
            [
              'target' => 'Id',
              'sourceType' => 'responsePath',
              'source' => 'Certificate.CertificateId',
            ],
          ],
          'path' => 'Certificate',
        ],
      ],
      'CreateUser' => [
        'request' => [
          'operation' => 'CreateUser',
        ],
        'resource' => [
          'type' => 'User',
          'identifiers' => [
            [
              'target' => 'Name',
              'sourceType' => 'requestParameter',
              'source' => 'UserName',
            ],
          ],
          'path' => 'User',
        ],
      ],
      'CreateVirtualMfaDevice' => [
        'request' => [
          'operation' => 'CreateVirtualMFADevice',
        ],
        'resource' => [
          'type' => 'VirtualMfaDevice',
          'identifiers' => [
            [
              'target' => 'SerialNumber',
              'sourceType' => 'responsePath',
              'source' => 'VirtualMFADevice.SerialNumber',
            ],
          ],
          'path' => 'VirtualMFADevice',
        ],
      ],
    ],
    'hasMany' => [
      'AccountAliases' => [
        'request' => [
          'operation' => 'ListAccountAliases',
        ],
        'resource' => [
          'type' => 'AccountAlias',
          'identifiers' => [
            [
              'target' => 'Name',
              'sourceType' => 'responsePath',
              'source' => 'AccountAliases[]',
            ],
          ],
        ],
      ],
      'Groups' => [
        'request' => [
          'operation' => 'ListGroups',
        ],
        'resource' => [
          'type' => 'Group',
          'identifiers' => [
            [
              'target' => 'Name',
              'sourceType' => 'responsePath',
              'source' => 'Groups[].GroupName',
            ],
          ],
          'path' => 'Groups[]',
        ],
      ],
      'InstanceProfiles' => [
        'request' => [
          'operation' => 'ListInstanceProfiles',
        ],
        'resource' => [
          'type' => 'InstanceProfile',
          'identifiers' => [
            [
              'target' => 'Name',
              'sourceType' => 'responsePath',
              'source' => 'InstanceProfiles[].InstanceProfileName',
            ],
          ],
          'path' => 'InstanceProfiles[]',
        ],
      ],
      'Roles' => [
        'request' => [
          'operation' => 'ListRoles',
        ],
        'resource' => [
          'type' => 'Role',
          'identifiers' => [
            [
              'target' => 'Name',
              'sourceType' => 'responsePath',
              'source' => 'Roles[].RoleName',
            ],
          ],
          'path' => 'Roles[]',
        ],
      ],
      'SamlProviders' => [
        'request' => [
          'operation' => 'ListSAMLProviders',
        ],
        'resource' => [
          'type' => 'SamlProvider',
          'identifiers' => [
            [
              'target' => 'Arn',
              'sourceType' => 'responsePath',
              'source' => 'SAMLProviderList[].Arn',
            ],
          ],
        ],
      ],
      'ServerCertificates' => [
        'request' => [
          'operation' => 'ListServerCertificates',
        ],
        'resource' => [
          'type' => 'ServerCertificate',
          'identifiers' => [
            [
              'target' => 'Name',
              'sourceType' => 'responsePath',
              'source' => 'ServerCertificateMetadataList[].ServerCertificateName',
            ],
          ],
        ],
      ],
      'SigningCertificates' => [
        'request' => [
          'operation' => 'ListSigningCertificates',
        ],
        'resource' => [
          'type' => 'SigningCertificate',
          'identifiers' => [
            [
              'target' => 'Id',
              'sourceType' => 'responsePath',
              'source' => 'Certificates[].CertificateId',
            ],
          ],
          'path' => 'Certificates[]',
        ],
      ],
      'Users' => [
        'request' => [
          'operation' => 'ListUsers',
        ],
        'resource' => [
          'type' => 'User',
          'identifiers' => [
            [
              'target' => 'Name',
              'sourceType' => 'responsePath',
              'source' => 'Users[].UserName',
            ],
          ],
          'path' => 'Users[]',
        ],
      ],
      'VirtualMfaDevices' => [
        'request' => [
          'operation' => 'ListVirtualMFADevices',
        ],
        'resource' => [
          'type' => 'VirtualMfaDevice',
          'identifiers' => [
            [
              'target' => 'SerialNumber',
              'sourceType' => 'responsePath',
              'source' => 'VirtualMFADevices[].SerialNumber',
            ],
          ],
          'path' => 'VirtualMFADevices[]',
        ],
      ],
    ],
  ],
  'resources' => [
    'AccessKey' => [
      'identifiers' => [
        [
          'name' => 'UserName',
          'memberName' => 'UserName',
        ],
        [
          'name' => 'Id',
          'memberName' => 'AccessKeyId',
        ],
      ],
      'shape' => 'AccessKey',
      'actions' => [
        'Activate' => [
          'request' => [
            'operation' => 'UpdateAccessKey',
            'params' => [
              [
                'target' => 'UserName',
                'sourceType' => 'identifier',
                'source' => 'UserName',
              ],
              [
                'target' => 'AccessKeyId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
              [
                'target' => 'Status',
                'sourceType' => 'string',
                'source' => 'Active',
              ],
            ],
          ],
        ],
        'Deactivate' => [
          'request' => [
            'operation' => 'UpdateAccessKey',
            'params' => [
              [
                'target' => 'UserName',
                'sourceType' => 'identifier',
                'source' => 'UserName',
              ],
              [
                'target' => 'AccessKeyId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
              [
                'target' => 'Status',
                'sourceType' => 'string',
                'source' => 'Inactive',
              ],
            ],
          ],
        ],
        'Delete' => [
          'request' => [
            'operation' => 'DeleteAccessKey',
            'params' => [
              [
                'target' => 'UserName',
                'sourceType' => 'identifier',
                'source' => 'UserName',
              ],
              [
                'target' => 'AccessKeyId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
      ],
    ],
    'AccountAlias' => [
      'identifiers' => [
        [
          'name' => 'Name',
        ],
      ],
      'actions' => [
        'Delete' => [
          'request' => [
            'operation' => 'DeleteAccountAlias',
            'params' => [
              [
                'target' => 'AccountAlias',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
      ],
    ],
    'AccountPasswordPolicy' => [
      'identifiers' => [
      ],
      'shape' => 'PasswordPolicy',
      'load' => [
        'request' => [
          'operation' => 'GetAccountPasswordPolicy',
        ],
        'path' => 'PasswordPolicy',
      ],
      'actions' => [
        'Delete' => [
          'request' => [
            'operation' => 'DeleteAccountPasswordPolicy',
          ],
        ],
        'Update' => [
          'request' => [
            'operation' => 'UpdateAccountPasswordPolicy',
          ],
        ],
      ],
    ],
    'AccountSummary' => [
      'identifiers' => [
      ],
      'shape' => 'GetAccountSummaryResponse',
      'load' => [
        'request' => [
          'operation' => 'GetAccountSummary',
        ],
        'path' => '$',
      ],
    ],
    'Group' => [
      'identifiers' => [
        [
          'name' => 'Name',
          'memberName' => 'GroupName',
        ],
      ],
      'shape' => 'Group',
      'load' => [
        'request' => [
          'operation' => 'GetGroup',
          'params' => [
            [
              'target' => 'GroupName',
              'sourceType' => 'identifier',
              'source' => 'Name',
            ],
          ],
        ],
        'path' => 'Group',
      ],
      'actions' => [
        'AddUser' => [
          'request' => [
            'operation' => 'AddUserToGroup',
            'params' => [
              [
                'target' => 'GroupName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
        'Create' => [
          'request' => [
            'operation' => 'CreateGroup',
            'params' => [
              [
                'target' => 'GroupName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
        'CreatePolicy' => [
          'request' => [
            'operation' => 'PutGroupPolicy',
            'params' => [
              [
                'target' => 'GroupName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
          'resource' => [
            'type' => 'GroupPolicy',
            'identifiers' => [
              [
                'target' => 'GroupName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
              [
                'target' => 'Name',
                'sourceType' => 'requestParameter',
                'source' => 'PolicyName',
              ],
            ],
          ],
        ],
        'Delete' => [
          'request' => [
            'operation' => 'DeleteGroup',
            'params' => [
              [
                'target' => 'GroupName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
        'RemoveUser' => [
          'request' => [
            'operation' => 'RemoveUserFromGroup',
            'params' => [
              [
                'target' => 'GroupName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
        'Update' => [
          'request' => [
            'operation' => 'UpdateGroup',
            'params' => [
              [
                'target' => 'GroupName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Group',
            'identifiers' => [
              [
                'target' => 'Name',
                'sourceType' => 'requestParameter',
                'source' => 'NewGroupName',
              ],
            ],
          ],
        ],
      ],
      'hasMany' => [
        'Policies' => [
          'request' => [
            'operation' => 'ListGroupPolicies',
            'params' => [
              [
                'target' => 'GroupName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
          'resource' => [
            'type' => 'GroupPolicy',
            'identifiers' => [
              [
                'target' => 'GroupName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
              [
                'target' => 'Name',
                'sourceType' => 'responsePath',
                'source' => 'PolicyNames[]',
              ],
            ],
          ],
        ],
        'Users' => [
          'request' => [
            'operation' => 'GetGroup',
            'params' => [
              [
                'target' => 'GroupName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
          'resource' => [
            'type' => 'User',
            'identifiers' => [
              [
                'target' => 'Name',
                'sourceType' => 'responsePath',
                'source' => 'Users[].UserName',
              ],
            ],
            'path' => 'Users[]',
          ],
        ],
      ],
      'subResources' => [
        'resources' => [
          'GroupPolicy',
        ],
        'identifiers' => [
          'Name' => 'GroupName',
        ],
      ],
    ],
    'GroupPolicy' => [
      'identifiers' => [
        [
          'name' => 'GroupName',
          'memberName' => 'GroupName',
        ],
        [
          'name' => 'Name',
          'memberName' => 'PolicyName',
        ],
      ],
      'shape' => 'GetGroupPolicyResponse',
      'load' => [
        'request' => [
          'operation' => 'GetGroupPolicy',
          'params' => [
            [
              'target' => 'GroupName',
              'sourceType' => 'identifier',
              'source' => 'GroupName',
            ],
            [
              'target' => 'PolicyName',
              'sourceType' => 'identifier',
              'source' => 'Name',
            ],
          ],
        ],
        'path' => '$',
      ],
      'actions' => [
        'Delete' => [
          'request' => [
            'operation' => 'DeleteGroupPolicy',
            'params' => [
              [
                'target' => 'GroupName',
                'sourceType' => 'identifier',
                'source' => 'GroupName',
              ],
              [
                'target' => 'PolicyName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
        'Put' => [
          'request' => [
            'operation' => 'PutGroupPolicy',
            'params' => [
              [
                'target' => 'GroupName',
                'sourceType' => 'identifier',
                'source' => 'GroupName',
              ],
              [
                'target' => 'PolicyName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
      ],
    ],
    'InstanceProfile' => [
      'identifiers' => [
        [
          'name' => 'Name',
          'memberName' => 'InstanceProfileName',
        ],
      ],
      'shape' => 'InstanceProfile',
      'load' => [
        'request' => [
          'operation' => 'GetInstanceProfile',
          'params' => [
            [
              'target' => 'InstanceProfileName',
              'sourceType' => 'identifier',
              'source' => 'Name',
            ],
          ],
        ],
        'path' => 'InstanceProfile',
      ],
      'actions' => [
        'AddRole' => [
          'request' => [
            'operation' => 'AddRoleToInstanceProfile',
            'params' => [
              [
                'target' => 'InstanceProfileName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
        'Delete' => [
          'request' => [
            'operation' => 'DeleteInstanceProfile',
            'params' => [
              [
                'target' => 'InstanceProfileName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
        'RemoveRole' => [
          'request' => [
            'operation' => 'RemoveRoleFromInstanceProfile',
            'params' => [
              [
                'target' => 'InstanceProfileName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
      ],
      'belongsTo' => [
        'Roles' => [
          'resource' => [
            'type' => 'Role',
            'identifiers' => [
              [
                'target' => 'Name',
                'sourceType' => 'dataMember',
                'source' => 'Roles[].RoleName',
              ],
            ],
            'path' => 'Roles[]',
          ],
        ],
      ],
    ],
    'LoginProfile' => [
      'identifiers' => [
        [
          'name' => 'UserName',
          'memberName' => 'UserName',
        ],
      ],
      'shape' => 'LoginProfile',
      'load' => [
        'request' => [
          'operation' => 'GetLoginProfile',
          'params' => [
            [
              'target' => 'UserName',
              'sourceType' => 'identifier',
              'source' => 'UserName',
            ],
          ],
        ],
        'path' => 'LoginProfile',
      ],
      'actions' => [
        'Create' => [
          'request' => [
            'operation' => 'CreateLoginProfile',
            'params' => [
              [
                'target' => 'UserName',
                'sourceType' => 'identifier',
                'source' => 'UserName',
              ],
            ],
          ],
        ],
        'Delete' => [
          'request' => [
            'operation' => 'DeleteLoginProfile',
            'params' => [
              [
                'target' => 'UserName',
                'sourceType' => 'identifier',
                'source' => 'UserName',
              ],
            ],
          ],
        ],
        'Update' => [
          'request' => [
            'operation' => 'UpdateLoginProfile',
            'params' => [
              [
                'target' => 'UserName',
                'sourceType' => 'identifier',
                'source' => 'UserName',
              ],
            ],
          ],
        ],
      ],
    ],
    'MfaDevice' => [
      'identifiers' => [
        [
          'name' => 'UserName',
          'memberName' => 'UserName',
        ],
        [
          'name' => 'SerialNumber',
          'memberName' => 'SerialNumber',
        ],
      ],
      'shape' => 'MFADevice',
      'actions' => [
        'Deactivate' => [
          'request' => [
            'operation' => 'DeactivateMFADevice',
            'params' => [
              [
                'target' => 'UserName',
                'sourceType' => 'identifier',
                'source' => 'UserName',
              ],
              [
                'target' => 'SerialNumber',
                'sourceType' => 'identifier',
                'source' => 'SerialNumber',
              ],
            ],
          ],
        ],
        'Enable' => [
          'request' => [
            'operation' => 'EnableMFADevice',
            'params' => [
              [
                'target' => 'UserName',
                'sourceType' => 'identifier',
                'source' => 'UserName',
              ],
              [
                'target' => 'SerialNumber',
                'sourceType' => 'identifier',
                'source' => 'SerialNumber',
              ],
            ],
          ],
        ],
        'Resync' => [
          'request' => [
            'operation' => 'ResyncMFADevice',
            'params' => [
              [
                'target' => 'UserName',
                'sourceType' => 'identifier',
                'source' => 'UserName',
              ],
              [
                'target' => 'SerialNumber',
                'sourceType' => 'identifier',
                'source' => 'SerialNumber',
              ],
            ],
          ],
        ],
      ],
    ],
    'Role' => [
      'identifiers' => [
        [
          'name' => 'Name',
          'memberName' => 'RoleName',
        ],
      ],
      'shape' => 'Role',
      'load' => [
        'request' => [
          'operation' => 'GetRole',
          'params' => [
            [
              'target' => 'RoleName',
              'sourceType' => 'identifier',
              'source' => 'Name',
            ],
          ],
        ],
        'path' => 'Role',
      ],
      'actions' => [
        'Delete' => [
          'request' => [
            'operation' => 'DeleteRole',
            'params' => [
              [
                'target' => 'RoleName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
        'UpdateAssumeRolePolicy' => [
          'request' => [
            'operation' => 'UpdateAssumeRolePolicy',
            'params' => [
              [
                'target' => 'RoleName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
      ],
      'hasMany' => [
        'InstanceProfiles' => [
          'request' => [
            'operation' => 'ListInstanceProfilesForRole',
            'params' => [
              [
                'target' => 'RoleName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
          'resource' => [
            'type' => 'InstanceProfile',
            'identifiers' => [
              [
                'target' => 'Name',
                'sourceType' => 'responsePath',
                'source' => 'InstanceProfiles[].InstanceProfileName',
              ],
            ],
            'path' => 'InstanceProfiles[]',
          ],
        ],
        'Policies' => [
          'request' => [
            'operation' => 'ListRolePolicies',
            'params' => [
              [
                'target' => 'RoleName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
          'resource' => [
            'type' => 'RolePolicy',
            'identifiers' => [
              [
                'target' => 'RoleName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
              [
                'target' => 'Name',
                'sourceType' => 'responsePath',
                'source' => 'PolicyNames[]',
              ],
            ],
          ],
        ],
      ],
      'subResources' => [
        'resources' => [
          'RolePolicy',
        ],
        'identifiers' => [
          'Name' => 'RoleName',
        ],
      ],
    ],
    'RolePolicy' => [
      'identifiers' => [
        [
          'name' => 'RoleName',
          'memberName' => 'RoleName',
        ],
        [
          'name' => 'Name',
          'memberName' => 'PolicyName',
        ],
      ],
      'shape' => 'GetRolePolicyResponse',
      'load' => [
        'request' => [
          'operation' => 'GetRolePolicy',
          'params' => [
            [
              'target' => 'RoleName',
              'sourceType' => 'identifier',
              'source' => 'RoleName',
            ],
            [
              'target' => 'PolicyName',
              'sourceType' => 'identifier',
              'source' => 'Name',
            ],
          ],
        ],
        'path' => '$',
      ],
      'actions' => [
        'Delete' => [
          'request' => [
            'operation' => 'DeleteRolePolicy',
            'params' => [
              [
                'target' => 'RoleName',
                'sourceType' => 'identifier',
                'source' => 'RoleName',
              ],
              [
                'target' => 'PolicyName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
        'Put' => [
          'request' => [
            'operation' => 'PutRolePolicy',
            'params' => [
              [
                'target' => 'RoleName',
                'sourceType' => 'identifier',
                'source' => 'RoleName',
              ],
              [
                'target' => 'PolicyName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
      ],
    ],
    'SamlProvider' => [
      'identifiers' => [
        [
          'name' => 'Arn',
        ],
      ],
      'shape' => 'GetSAMLProviderResponse',
      'load' => [
        'request' => [
          'operation' => 'GetSAMLProvider',
          'params' => [
            [
              'target' => 'SAMLProviderArn',
              'sourceType' => 'identifier',
              'source' => 'Arn',
            ],
          ],
        ],
        'path' => '$',
      ],
      'actions' => [
        'Delete' => [
          'request' => [
            'operation' => 'DeleteSAMLProvider',
            'params' => [
              [
                'target' => 'SAMLProviderArn',
                'sourceType' => 'identifier',
                'source' => 'Arn',
              ],
            ],
          ],
        ],
        'Update' => [
          'request' => [
            'operation' => 'UpdateSAMLProvider',
            'params' => [
              [
                'target' => 'SAMLProviderArn',
                'sourceType' => 'identifier',
                'source' => 'Arn',
              ],
            ],
          ],
        ],
      ],
    ],
    'ServerCertificate' => [
      'identifiers' => [
        [
          'name' => 'Name',
        ],
      ],
      'shape' => 'ServerCertificate',
      'load' => [
        'request' => [
          'operation' => 'GetServerCertificate',
          'params' => [
            [
              'target' => 'ServerCertificateName',
              'sourceType' => 'identifier',
              'source' => 'Name',
            ],
          ],
        ],
        'path' => 'ServerCertificate',
      ],
      'actions' => [
        'Delete' => [
          'request' => [
            'operation' => 'DeleteServerCertificate',
            'params' => [
              [
                'target' => 'ServerCertificateName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
        'Update' => [
          'request' => [
            'operation' => 'UpdateServerCertificate',
            'params' => [
              [
                'target' => 'ServerCertificateName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
          'resource' => [
            'type' => 'ServerCertificate',
            'identifiers' => [
              [
                'target' => 'Name',
                'sourceType' => 'requestParameter',
                'source' => 'NewServerCertificateName',
              ],
            ],
          ],
        ],
      ],
    ],
    'SigningCertificate' => [
      'identifiers' => [
        [
          'name' => 'Id',
          'memberName' => 'CertificateId',
        ],
      ],
      'shape' => 'SigningCertificate',
      'actions' => [
        'Activate' => [
          'request' => [
            'operation' => 'UpdateSigningCertificate',
            'params' => [
              [
                'target' => 'CertificateId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
              [
                'target' => 'Status',
                'sourceType' => 'string',
                'source' => 'Active',
              ],
            ],
          ],
        ],
        'Deactivate' => [
          'request' => [
            'operation' => 'UpdateSigningCertificate',
            'params' => [
              [
                'target' => 'CertificateId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
              [
                'target' => 'Status',
                'sourceType' => 'string',
                'source' => 'Inactive',
              ],
            ],
          ],
        ],
        'Delete' => [
          'request' => [
            'operation' => 'DeleteSigningCertificate',
            'params' => [
              [
                'target' => 'CertificateId',
                'sourceType' => 'identifier',
                'source' => 'Id',
              ],
            ],
          ],
        ],
      ],
    ],
    'User' => [
      'identifiers' => [
        [
          'name' => 'Name',
          'memberName' => 'UserName',
        ],
      ],
      'shape' => 'User',
      'load' => [
        'request' => [
          'operation' => 'GetUser',
          'params' => [
            [
              'target' => 'UserName',
              'sourceType' => 'identifier',
              'source' => 'Name',
            ],
          ],
        ],
        'path' => 'User',
      ],
      'actions' => [
        'AddGroup' => [
          'request' => [
            'operation' => 'AddUserToGroup',
            'params' => [
              [
                'target' => 'UserName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
        'CreateAccessKey' => [
          'request' => [
            'operation' => 'CreateAccessKey',
            'params' => [
              [
                'target' => 'UserName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
          'resource' => [
            'type' => 'AccessKey',
            'identifiers' => [
              [
                'target' => 'UserName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'AccessKey.AccessKeyId',
              ],
            ],
            'path' => 'AccessKey',
          ],
        ],
        'CreatePolicy' => [
          'request' => [
            'operation' => 'PutUserPolicy',
            'params' => [
              [
                'target' => 'UserName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
          'resource' => [
            'type' => 'UserPolicy',
            'identifiers' => [
              [
                'target' => 'UserName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
              [
                'target' => 'Name',
                'sourceType' => 'requestParameter',
                'source' => 'PolicyName',
              ],
            ],
          ],
        ],
        'Delete' => [
          'request' => [
            'operation' => 'DeleteUser',
            'params' => [
              [
                'target' => 'UserName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
        'EnableMfa' => [
          'request' => [
            'operation' => 'EnableMFADevice',
            'params' => [
              [
                'target' => 'UserName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
          'resource' => [
            'type' => 'MfaDevice',
            'identifiers' => [
              [
                'target' => 'UserName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
              [
                'target' => 'SerialNumber',
                'sourceType' => 'requestParameter',
                'source' => 'SerialNumber',
              ],
            ],
          ],
        ],
        'RemoveGroup' => [
          'request' => [
            'operation' => 'RemoveUserFromGroup',
            'params' => [
              [
                'target' => 'UserName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
        'Update' => [
          'request' => [
            'operation' => 'UpdateUser',
            'params' => [
              [
                'target' => 'UserName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
          'resource' => [
            'type' => 'User',
            'identifiers' => [
              [
                'target' => 'Name',
                'sourceType' => 'requestParameter',
                'source' => 'NewUserName',
              ],
            ],
          ],
        ],
      ],
      'hasMany' => [
        'AccessKeys' => [
          'request' => [
            'operation' => 'ListAccessKeys',
            'params' => [
              [
                'target' => 'UserName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
          'resource' => [
            'type' => 'AccessKey',
            'identifiers' => [
              [
                'target' => 'UserName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
              [
                'target' => 'Id',
                'sourceType' => 'responsePath',
                'source' => 'AccessKeyMetadata[].AccessKeyId',
              ],
            ],
            'path' => 'AccessKeyMetadata[]',
          ],
        ],
        'Groups' => [
          'request' => [
            'operation' => 'ListGroupsForUser',
            'params' => [
              [
                'target' => 'UserName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
          'resource' => [
            'type' => 'Group',
            'identifiers' => [
              [
                'target' => 'Name',
                'sourceType' => 'responsePath',
                'source' => 'Groups[].GroupName',
              ],
            ],
            'path' => 'Groups[]',
          ],
        ],
        'MfaDevices' => [
          'request' => [
            'operation' => 'ListMFADevices',
            'params' => [
              [
                'target' => 'UserName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
          'resource' => [
            'type' => 'MfaDevice',
            'identifiers' => [
              [
                'target' => 'UserName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
              [
                'target' => 'SerialNumber',
                'sourceType' => 'responsePath',
                'source' => 'MFADevices[].SerialNumber',
              ],
            ],
            'path' => 'MFADevices[]',
          ],
        ],
        'Policies' => [
          'request' => [
            'operation' => 'ListUserPolicies',
            'params' => [
              [
                'target' => 'UserName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
          'resource' => [
            'type' => 'UserPolicy',
            'identifiers' => [
              [
                'target' => 'UserName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
              [
                'target' => 'Name',
                'sourceType' => 'responsePath',
                'source' => 'PolicyNames[]',
              ],
            ],
          ],
        ],
      ],
      'subResources' => [
        'resources' => [
          'AccessKey',
          'LoginProfile',
          'MfaDevice',
          'UserPolicy',
        ],
        'identifiers' => [
          'Name' => 'UserName',
        ],
      ],
    ],
    'UserPolicy' => [
      'identifiers' => [
        [
          'name' => 'UserName',
          'memberName' => 'UserName',
        ],
        [
          'name' => 'Name',
          'memberName' => 'PolicyName',
        ],
      ],
      'shape' => 'GetUserPolicyResponse',
      'load' => [
        'request' => [
          'operation' => 'GetUserPolicy',
          'params' => [
            [
              'target' => 'UserName',
              'sourceType' => 'identifier',
              'source' => 'UserName',
            ],
            [
              'target' => 'PolicyName',
              'sourceType' => 'identifier',
              'source' => 'Name',
            ],
          ],
        ],
        'path' => '$',
      ],
      'actions' => [
        'Delete' => [
          'request' => [
            'operation' => 'DeleteUserPolicy',
            'params' => [
              [
                'target' => 'UserName',
                'sourceType' => 'identifier',
                'source' => 'UserName',
              ],
              [
                'target' => 'PolicyName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
        'Put' => [
          'request' => [
            'operation' => 'PutUserPolicy',
            'params' => [
              [
                'target' => 'UserName',
                'sourceType' => 'identifier',
                'source' => 'UserName',
              ],
              [
                'target' => 'PolicyName',
                'sourceType' => 'identifier',
                'source' => 'Name',
              ],
            ],
          ],
        ],
      ],
    ],
    'VirtualMfaDevice' => [
      'identifiers' => [
        [
          'name' => 'SerialNumber',
          'memberName' => 'SerialNumber',
        ],
      ],
      'shape' => 'VirtualMFADevice',
      'actions' => [
        'Delete' => [
          'request' => [
            'operation' => 'DeleteVirtualMFADevice',
            'params' => [
              [
                'target' => 'SerialNumber',
                'sourceType' => 'identifier',
                'source' => 'SerialNumber',
              ],
            ],
          ],
        ],
      ],
      'belongsTo' => [
        'User' => [
          'resource' => [
            'type' => 'User',
            'identifiers' => [
              [
                'target' => 'Name',
                'sourceType' => 'dataMember',
                'source' => 'User.UserName',
              ],
            ],
          ],
        ],
      ],
    ],
  ],
];
