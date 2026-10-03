import { FileText, Folder } from 'lucide-react'
import { Badge, Banner, CodeBlock, Table, TBody, TD, TH, THead, TR } from '../../index'
import s from './Features.shared.module.css'

const manifest = `name: api
type: DockerImage
image: ghcr.io/acme/api:2.4.1
exposure: External
env:
  LOG_LEVEL: info
secrets:
  DATABASE_URL: sealed:v1:9f3a7c21`

const tree: { name: string; depth: number; folder?: boolean }[] = [
  { name: 'manifests', depth: 0, folder: true },
  { name: 'projects', depth: 1, folder: true },
  { name: 'acme.yaml', depth: 2 },
  { name: 'environments', depth: 1, folder: true },
  { name: 'acme-staging.yaml', depth: 2 },
  { name: 'acme-production.yaml', depth: 2 },
  { name: 'networks', depth: 1, folder: true },
  { name: 'services', depth: 1, folder: true },
  { name: 'api.yaml', depth: 2 },
  { name: 'postgres.yaml', depth: 2 },
]

export function ReproducibleModule() {
  return (
    <>
      <div className={s.cols}>
        <div className={s.col}>
          <span className={s.label}>Mirrored on every change</span>
          <div className={s.tree}>
            {tree.map((n) => (
              <div className={s.treeItem} style={{ paddingLeft: n.depth * 16 }} key={`${n.depth}-${n.name}`}>
                {n.folder ? <Folder size={14} /> : <FileText size={14} />}
                {n.name}
              </div>
            ))}
          </div>
        </div>
        <div className={s.col}>
          <span className={s.label}>api.yaml</span>
          <CodeBlock code={manifest} />
        </div>
      </div>
      <span className={s.label}>Restore preview</span>
      <Table compact>
        <THead><TR><TH>Entity</TH><TH>Name</TH><TH>Change</TH></TR></THead>
        <TBody>
          <TR><TD variant="muted">Service</TD><TD variant="mono">redis</TD><TD><Badge tone="success">create</Badge></TD></TR>
          <TR><TD variant="muted">Service</TD><TD variant="mono">api</TD><TD><Badge>update</Badge></TD></TR>
          <TR><TD variant="muted">Network</TD><TD variant="mono">old-net</TD><TD><Badge tone="danger">delete</Badge></TD></TR>
        </TBody>
      </Table>
      <Banner variant="info" title="Dry run">Nothing was changed. Review the diff, then apply.</Banner>
    </>
  )
}
