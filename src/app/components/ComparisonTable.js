"use client";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const TableWrapper = styled.div`
  margin-top: 4rem;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-body);
  min-width: 600px;

  th, td {
    padding: 1rem;
    text-align: center;
    border-bottom: 1px solid #eee;
  }

  th {
    font-weight: 600;
    color: var(--color-dark);
  }

  td {
    font-size: 0.95rem;
    color: #444;
  }

  .highlight {
    font-weight: bold;
    color: var(--color-accent);
  }

  td:first-child, th:first-child {
    text-align: left;
  }
`;

export default function ComparisonTable() {
  const { t } = useTranslation("common");

  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <th>{t("tableFeatures")}</th>
            <th>{t("tableExpress")}</th>
            <th>{t("tablePro")}</th>
            <th>{t("tableAI")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{t("featureCustomDesign")}</td>
            <td>✔</td>
            <td>✔✔</td>
            <td>✔✔✔</td>
          </tr>
          <tr>
            <td>{t("featureContact")}</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
          </tr>
          <tr>
            <td>{t("featureIntegration")}</td>
            <td>✘</td>
            <td>✔</td>
            <td>✔✔</td>
          </tr>
          <tr>
            <td>{t("featureMotion")}</td>
            <td>✘</td>
            <td>✔</td>
            <td>✔✔</td>
          </tr>
          <tr>
            <td>{t("featureAI")}</td>
            <td>✘</td>
            <td>✘</td>
            <td className="highlight">✔✔✔</td>
          </tr>
          <tr>
            <td>{t("featureDelivery")}</td>
            <td>{t("value3days")}</td>
            <td>{t("value7days")}</td>
            <td>{t("valueVaries")}</td>
          </tr>
          <tr>
            <td>{t("featurePerfect")}</td>
            <td>{t("targetFreelancers")}</td>
            <td>{t("targetSMB")}</td>
            <td>{t("targetAI")}</td>
          </tr>
        </tbody>
      </Table>
    </TableWrapper>
  );
}
