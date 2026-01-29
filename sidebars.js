// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Programs',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Batch Control',
          link: {
            type: 'generated-index',
            title: 'Batch Control Programs',
            description: 'Programs for batch job control, sequencing, and recovery',
          },
          items: [
            'programs/BCHCTL00',
            'programs/PRCSEQ00',
            'programs/RCVPRC00',
            'programs/CKPRST',
          ],
        },
        {
          type: 'category',
          label: 'Batch Processing',
          link: {
            type: 'generated-index',
            title: 'Batch Processing Programs',
            description: 'Core batch processing programs for data loading and updates',
          },
          items: [
            'programs/HISTLD00',
            'programs/POSUPDT',
          ],
        },
        {
          type: 'category',
          label: 'Batch Reporting',
          link: {
            type: 'generated-index',
            title: 'Batch Reporting Programs',
            description: 'Report generation and return code analysis programs',
          },
          items: [
            'programs/RPTAUD00',
            'programs/RPTPOS00',
            'programs/RPTSTA00',
            'programs/RTNANA00',
            'programs/RTNCDE00',
          ],
        },
        {
          type: 'category',
          label: 'CICS Online',
          link: {
            type: 'generated-index',
            title: 'CICS Online Programs',
            description: 'CICS transaction programs for online processing',
          },
          items: [
            'programs/INQONLN',
            'programs/INQHIST',
            'programs/INQPORT',
            'programs/CURSMGR',
            'programs/SECMGR',
            'programs/ERRHNDL',
          ],
        },
        {
          type: 'category',
          label: 'DB2 Services',
          link: {
            type: 'generated-index',
            title: 'DB2 Service Programs',
            description: 'Common DB2 database service programs',
          },
          items: [
            'programs/DB2CONN',
            'programs/DB2CMT',
            'programs/DB2ERR',
            'programs/DB2STAT',
            'programs/DB2ONLN',
            'programs/DB2RECV',
          ],
        },
        {
          type: 'category',
          label: 'Portfolio Management',
          link: {
            type: 'generated-index',
            title: 'Portfolio Management Programs',
            description: 'Portfolio CRUD and transaction processing programs',
          },
          items: [
            'programs/PORTMSTR',
            'programs/PORTADD',
            'programs/PORTREAD',
            'programs/PORTUPDT',
            'programs/PORTDEL',
            'programs/PORTTRAN',
            'programs/PORTVALD',
            'programs/PORTTEST',
          ],
        },
        {
          type: 'category',
          label: 'Common Services',
          link: {
            type: 'generated-index',
            title: 'Common Service Programs',
            description: 'Shared service programs used across the system',
          },
          items: [
            'programs/ERRPROC',
            'programs/AUDPROC',
          ],
        },
        {
          type: 'category',
          label: 'Utilities',
          link: {
            type: 'generated-index',
            title: 'Utility Programs',
            description: 'System utility and maintenance programs',
          },
          items: [
            'programs/UTLMNT00',
            'programs/UTLMON00',
            'programs/UTLVAL00',
          ],
        },
        {
          type: 'category',
          label: 'Testing',
          link: {
            type: 'generated-index',
            title: 'Testing Programs',
            description: 'Test data generation and validation programs',
          },
          items: [
            'programs/TSTGEN00',
            'programs/TSTVAL00',
          ],
        },
        {
          type: 'category',
          label: 'Templates',
          link: {
            type: 'generated-index',
            title: 'Template Programs',
            description: 'Template programs demonstrating standard patterns',
          },
          items: [
            'programs/FILE-HANDLING',
            'programs/DB2-HANDLING',
            'programs/ERRHANDL',
            'programs/PROGNAME',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Copybooks',
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'Copybooks',
        description: 'Shared data structures and constants used across the system',
      },
      items: [
        {
          type: 'category',
          label: 'Batch',
          link: {
            type: 'generated-index',
            title: 'Batch Copybooks',
            description: 'Copybooks for batch processing control and sequencing',
          },
          items: [
            'copybooks/BCHCTL',
            'copybooks/BCHCON',
            'copybooks/CKPRST',
            'copybooks/PRCSEQ',
          ],
        },
        {
          type: 'category',
          label: 'Common',
          link: {
            type: 'generated-index',
            title: 'Common Copybooks',
            description: 'Shared data structures used across the system',
          },
          items: [
            'copybooks/COMMON',
            'copybooks/ERRHAND',
            'copybooks/RTNCODE',
            'copybooks/RETHND',
            'copybooks/AUDITLOG',
            'copybooks/PORTFLIO',
            'copybooks/PORTVAL',
            'copybooks/POSREC',
            'copybooks/TRNREC',
            'copybooks/HISTREC',
          ],
        },
        {
          type: 'category',
          label: 'DB2',
          link: {
            type: 'generated-index',
            title: 'DB2 Copybooks',
            description: 'DB2 database-related copybooks',
          },
          items: [
            'copybooks/SQLCA',
            'copybooks/DBPROC',
            'copybooks/DBTBLS',
          ],
        },
        {
          type: 'category',
          label: 'Online',
          link: {
            type: 'generated-index',
            title: 'Online Copybooks',
            description: 'CICS online transaction copybooks',
          },
          items: [
            'copybooks/ERRHND',
            'copybooks/INQCOM',
            'copybooks/DB2REQ',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
