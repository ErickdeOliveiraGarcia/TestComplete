function loop(){
  DDT.CSVDriver("C:\\Users\Public\Documents\TestComplete 15 Samples\Desktop\Data Driven Loop CSV\Data Driven-Loop.csv");
  DDT.CurrentDriver.DriverMethod("Unit1.Test");
 }
function Test(){
  
  let orders = Aliases.Orders;
  Log.AppendFolder(DDT.CurrentDriver.Value("Nome"));
  let listView = orders.MainForm.OrdersView;
  listView.ClickItemR(21, "31206 Conner Ln.");
  listView.PopupMenu.Click("New order...");
  let orderForm = orders.OrderForm;
  let groupBox = orderForm.Group;
  let textBox = groupBox.Customer;
  textBox.SetText(DDT.CurrentDriver.Value("Nome"));
  textBox = groupBox.Street;
  textBox.SetText(DDT.CurrentDriver.Value("Rua"));
  orderForm.ButtonOK.ClickButton();
  Log.PopLogFolder();  
}
