#!groovy
 
@Library('gie@develop') _
 
continuousDeployment(
  authProvider: 'none',
    builder: 'npm',
    deployer: 'apache_mutualise',
    alias: 'u-gestion-raspberry',
    skipIntegrationTests: true,
    allowManualDeployment: true,
    forceEligibilityForRelease: true,
    apacheMutualiseDeployer: [
        integr: [
            host       : 'u3antu332',
            port       : '80',
            confenv    : 'confenv.properties',
            confapp    : 'confapp.properties',
        ],
        prod: [[        
            host       : 'u3antu581',
            port       : '80',
            confenv    : 'confenv.properties',
            confapp    : 'confapp.properties',
          ], [
            host       : 'u3antu582',
            port       : '80',
            confenv    : 'confenv.properties',
            confapp    : 'confapp.properties',
        ]]
    ],
    smokeTestRunner: [
        integr:   [
            testRunner: 'cypress',
            parameters : [
                            smUserProfile: 'Centrale',
                            smCentrale: 'U GIE IRIS',
                            credentials: 'ridusr',
                            smAppUrl: 'http://u-gestion-raspberry.devint.groupement.systeme-u.fr'
            ]
        ],
    ]
)
