import { Check, Minus, X } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

/**
 * Mainland vs Free Zone vs Offshore decision table.
 *
 * The directory below compares individual jurisdictions; this answers the
 * question that comes first — which *type* of entity the visitor needs. Values
 * are structural facts about each entity type, not fees.
 */

type Cell = { value: string; tone?: 'yes' | 'no' | 'partial' };

const columns = ['Mainland', 'Free Zone', 'Offshore'] as const;

const rows: { label: string; cells: [Cell, Cell, Cell] }[] = [
  {
    label: 'Trade directly in the UAE market',
    cells: [
      { value: 'Yes, unrestricted', tone: 'yes' },
      { value: 'Via distributor or agent', tone: 'partial' },
      { value: 'Not permitted', tone: 'no' },
    ],
  },
  {
    label: 'Trade internationally',
    cells: [
      { value: 'Yes', tone: 'yes' },
      { value: 'Yes', tone: 'yes' },
      { value: 'Holding only', tone: 'partial' },
    ],
  },
  {
    label: '100% foreign ownership',
    cells: [
      { value: 'Most activities', tone: 'partial' },
      { value: 'Always', tone: 'yes' },
      { value: 'Always', tone: 'yes' },
    ],
  },
  {
    label: 'Residence visas',
    cells: [
      { value: 'Yes, scales with office', tone: 'yes' },
      { value: 'Yes, per package quota', tone: 'yes' },
      { value: 'None', tone: 'no' },
    ],
  },
  {
    label: 'Physical office required',
    cells: [
      { value: 'Yes — Ejari tenancy', tone: 'no' },
      { value: 'Flexi-desk usually enough', tone: 'yes' },
      { value: 'None — registered agent', tone: 'yes' },
    ],
  },
  {
    label: 'Bid for government contracts',
    cells: [
      { value: 'Yes', tone: 'yes' },
      { value: 'No', tone: 'no' },
      { value: 'No', tone: 'no' },
    ],
  },
  {
    label: 'Typical setup cost',
    cells: [
      { value: 'Higher — tenancy included', tone: 'partial' },
      { value: 'Lower', tone: 'yes' },
      { value: 'Lowest', tone: 'yes' },
    ],
  },
  {
    label: 'Best suited to',
    cells: [
      { value: 'Retail, contracting, local services' },
      { value: 'Consultancy, trading, e-commerce' },
      { value: 'Holding shares, property and IP' },
    ],
  },
];

const toneIcon = {
  yes: <Check className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />,
  no: <X className="h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />,
  partial: <Minus className="h-4 w-4 shrink-0 text-amber-500" aria-hidden="true" />,
};

export default function StructureCompare() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Decide the type first"
          title={
            <>
              Mainland, free zone or <span className="gradient-text">offshore?</span>
            </>
          }
          description="Before comparing individual jurisdictions, get the entity type right. These are structural differences — they do not change between one free zone and another."
        />

        <Reveal className="mt-14">
          <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-card">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                <caption className="sr-only">
                  Comparison of UAE mainland, free zone and offshore company structures
                </caption>
                <thead>
                  <tr className="bg-brand-navy text-white">
                    <th scope="col" className="px-5 py-4 text-xs font-bold uppercase tracking-wider">
                      &nbsp;
                    </th>
                    {columns.map((c) => (
                      <th
                        key={c}
                        scope="col"
                        className="px-5 py-4 text-sm font-bold text-white"
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={`border-t border-slate-100 align-top ${
                        i % 2 === 1 ? 'bg-slate-50/50' : ''
                      }`}
                    >
                      <th
                        scope="row"
                        className="px-5 py-4 text-sm font-semibold text-ink-900"
                      >
                        {row.label}
                      </th>
                      {row.cells.map((cell, j) => (
                        <td key={columns[j]} className="px-5 py-4 text-ink-500">
                          <span className="flex items-start gap-2">
                            {cell.tone ? toneIcon[cell.tone] : null}
                            {cell.value}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <p className="mt-6 text-center text-xs text-ink-400">
          Scroll the table sideways on smaller screens. Ownership rules for mainland activities vary
          — we confirm the position for your exact activity before you proceed.
        </p>
      </div>
    </section>
  );
}
