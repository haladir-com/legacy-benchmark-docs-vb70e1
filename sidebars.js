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
          label: 'Batch Processing',
          items: [
            'programs/BCHCTL00',
            'programs/CKPRST',
            'programs/HISTLD00',
            'programs/PRCSEQ00',
            'programs/RCVPRC00',
          ],
        },
        {
          type: 'category',
          label: 'CICS Online',
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
          label: 'DB2 Database',
          items: [
            'programs/DB2CMT',
            'programs/DB2CONN',
            'programs/DB2ERR',
            'programs/DB2STAT',
          ],
        },
        {
          type: 'category',
          label: 'Portfolio Management',
          items: [
            'programs/PORTADD',
            'programs/PORTDEL',
            'programs/PORTMSTR',
            'programs/PORTREAD',
            'programs/PORTTEST',
            'programs/PORTTRAN',
            'programs/PORTUPDT',
            'programs/PORTVALD',
            'programs/POSUPDT',
          ],
        },
        {
          type: 'category',
          label: 'Reporting',
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
          label: 'Error Handling',
          items: [
            'programs/AUDPROC',
            'programs/ERRPROC',
          ],
        },
        {
          type: 'category',
          label: 'Testing & Utilities',
          items: [
            'programs/TSTGEN00',
            'programs/TSTVAL00',
            'programs/UTLMNT00',
            'programs/UTLMON00',
            'programs/UTLVAL00',
          ],
        },
        {
          type: 'category',
          label: 'Templates',
          items: [
            'programs/DB2-HANDLING',
            'programs/ERRHANDL',
            'programs/FILE-HANDLING',
            'programs/PROGNAME',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Copybooks',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Batch',
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
          items: [
            'copybooks/AUDITLOG',
            'copybooks/ERRHAND',
            'copybooks/HISTREC',
            'copybooks/PORTFLIO',
            'copybooks/PORTVAL',
            'copybooks/POSREC',
            'copybooks/RETHND',
            'copybooks/RTNCODE',
            'copybooks/TRNREC',
          ],
        },
        {
          type: 'category',
          label: 'DB2',
          items: [
            'copybooks/DBPROC',
            'copybooks/DBTBLS',
            'copybooks/SQLCA',
          ],
        },
        {
          type: 'category',
          label: 'Online',
          items: [
            'copybooks/DB2REQ',
            'copybooks/DB2STAT',
            'copybooks/ERRHND',
            'copybooks/INQCOM',
            'copybooks/PORTREC',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
