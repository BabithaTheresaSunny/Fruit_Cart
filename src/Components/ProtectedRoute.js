export default function ProtectedRoute({ children }) {
  const auth = JSON.parse(localStorage.getItem("auth"));
  console.log(typeof auth);
  if (!auth) {
    return <div>No Access</div>;
  }

  return children;
}
