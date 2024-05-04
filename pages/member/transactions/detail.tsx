import SideBar from "@/components/organisms/SideBar";
import TransactionDetailContent from "@/components/organisms/TransactionDetailContent";

export default function DetailTransactions() {
  return (
    <section className="transactions-detail overflow-auto">
      <SideBar  />
      <TransactionDetailContent />
    </section>
  );
}
