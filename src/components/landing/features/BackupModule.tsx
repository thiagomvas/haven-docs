import { GitBranch } from 'lucide-react'
import { Badge, Banner, FeaturePanel, Table, TBody, TD, TH, THead, TR } from '../../index'
import s from './Features.shared.module.css'

export function BackupModule() {
  return (
    <FeaturePanel
      icon={<GitBranch size={20} />}
      title="Restore is a diff"
      description="State is mirrored to YAML manifests. Restoring compares them to the live database and shows what would change, never a wipe."
    >
      <div className={s.mock}>
        <Table compact>
          <THead><TR><TH>Entity</TH><TH>Name</TH><TH>Change</TH></TR></THead>
          <TBody>
            <TR><TD variant="muted">Service</TD><TD variant="mono">redis</TD><TD><Badge tone="success">create</Badge></TD></TR>
            <TR><TD variant="muted">Service</TD><TD variant="mono">api</TD><TD><Badge>update</Badge></TD></TR>
            <TR><TD variant="muted">Network</TD><TD variant="mono">old-net</TD><TD><Badge tone="danger">delete</Badge></TD></TR>
          </TBody>
        </Table>
        <Banner variant="info" title="Dry run">Nothing was changed.</Banner>
      </div>
    </FeaturePanel>
  )
}
