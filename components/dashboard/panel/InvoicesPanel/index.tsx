import router from "next/router";
import { useEffect } from "react";
import { useAppSelector } from "../../../../lib/hooks";
import { Heading } from "../../../typography";

const InvoicesPanel = (): JSX.Element => {
  const { session } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!session) {
      router.replace("/signin");
    }
  }, [session]);

  return (
    <div className="mt-10">
      <div className="dashboard-panel">
        <div className="dashboard-panel-main-section">
          <Heading level={4} size="medium" weight="font-bold">
            Invoices
          </Heading>
        </div>
      </div>
    </div>
  );
};

export default InvoicesPanel;
