// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  documentationSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Batch Programs',
      description: 'Batch processing programs including job control, checkpoint/restart, and scheduled processing',
      collapsed: false,
      items: [
        'programs/BCHCTL00',
        'programs/CKPRST',
        'programs/HISTLD00',
        'programs/PRCSEQ00',
        'programs/RCVPRC00',
        'programs/POSUPDT',
      ],
    },
    {
      type: 'category',
      label: 'CICS/Online Programs',
      description: 'CICS online transaction programs for user interaction and real-time processing',
      collapsed: true,
      items: [
        'programs/CURSMGR',
        'programs/DB2ONLN',
        'programs/DB2RECV',
        'programs/ERRHNDL',
        'programs/INQHIST',
        'programs/INQONLN',
        'programs/INQPORT',
        'programs/SECMGR',
      ],
    },
    {
      type: 'category',
      label: 'DB2/Database Programs',
      description: 'DB2 database management programs including connection handling, commits, and error processing',
      collapsed: true,
      items: [
        'programs/DB2CMT',
        'programs/DB2CONN',
        'programs/DB2ERR',
        'programs/DB2STAT',
      ],
    },
    {
      type: 'category',
      label: 'Portfolio Programs',
      description: 'Portfolio management programs for maintaining portfolio data, positions, and transactions',
      collapsed: true,
      items: [
        'programs/PORTADD',
        'programs/PORTDEL',
        'programs/PORTMSTR',
        'programs/PORTREAD',
        'programs/PORTTRAN',
        'programs/PORTUPDT',
        'programs/PORTVALD',
      ],
    },
    {
      type: 'category',
      label: 'Reporting Programs',
      description: 'Report generation programs for audit trails, positions, statistics, and analysis',
      collapsed: true,
      items: [
        'programs/RPTAUD00',
        'programs/RPTPOS00',
        'programs/RPTSTA00',
        'programs/RTNANA00',
      ],
    },
    {
      type: 'category',
      label: 'Testing Programs',
      description: 'Test data generation and validation programs for quality assurance',
      collapsed: true,
      items: [
        'programs/PORTTEST',
        'programs/TSTGEN00',
        'programs/TSTVAL00',
      ],
    },
    {
      type: 'category',
      label: 'Utility Programs',
      description: 'Common utility programs for error handling, audit logging, return code management, and system maintenance',
      collapsed: true,
      items: [
        'programs/AUDPROC',
        'programs/ERRPROC',
        'programs/RTNCDE00',
        'programs/UTLMNT00',
        'programs/UTLMON00',
        'programs/UTLVAL00',
      ],
    },
    {
      type: 'category',
      label: 'Templates',
      description: 'Template programs providing standard patterns for new development',
      collapsed: true,
      items: [
        'programs/DB2-HANDLING',
        'programs/ERRHANDL',
        'programs/FILE-HANDLING',
        'programs/PROGNAME',
      ],
    },
    {
      type: 'category',
      label: 'Copybooks',
      description: 'Reusable COBOL copybooks containing data structures and common definitions',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Batch Copybooks',
          collapsed: true,
          items: [
            'copybooks/BCHCON',
            'copybooks/BCHCTL',
            'copybooks/CKPRST',
            'copybooks/HISTREC',
            'copybooks/PRCSEQ',
            'copybooks/RETHND',
          ],
        },
        {
          type: 'category',
          label: 'Common Copybooks',
          collapsed: true,
          items: [
            'copybooks/COMMON',
            'copybooks/ERRHAND',
            'copybooks/PORTFLIO',
            'copybooks/PORTVAL',
            'copybooks/POSREC',
            'copybooks/RTNCODE',
            'copybooks/TRNREC',
          ],
        },
        {
          type: 'category',
          label: 'Database Copybooks',
          collapsed: true,
          items: [
            'copybooks/DBPROC',
            'copybooks/DBTBLS',
            'copybooks/SQLCA',
          ],
        },
        {
          type: 'category',
          label: 'Online Copybooks',
          collapsed: true,
          items: [
            'copybooks/AUDITLOG',
            'copybooks/DB2REQ',
            'copybooks/ERRHND',
            'copybooks/INQCOM',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
