function Test1()
{
  let orders = Aliases.Orders;
  orders.MainForm.ToolBar.ClickItem(4, false);
  let orderForm = orders.OrderForm;
  let groupBox = orderForm.Group;
  let textBox = groupBox.Customer;
  textBox.Click(49, 14);
  textBox.Keys("[Caps]");
  textBox.SetText("ERICK");
  textBox.Keys("[Tab]");
  textBox = groupBox.Street;
  textBox.SetText("FRANCA");
  textBox.Keys("[Tab]");
  groupBox.City.Keys("[Tab]");
  textBox = groupBox.State;
  textBox.Keys("[Tab]");
  groupBox.Zip.Keys("![Tab]");
  textBox.SetText("SP");
  orderForm.ButtonOK.Click(39, 9);
  
}