function EventControl1_OnLogError(Sender, LogParams)
{
  Log.Message("Agora aconteceu um erro");
  LogParams.Color = c1Yellow;
  LogParams.FontColor = c1red;
  LogParams.Locked = true;
  LogParams.Locked = false;
}

function disparandoUmEvento(){
  
Log.Error("Tivemos um erro");
}

function EventControl2_OnUnexpectedWindow(Sender, Window, LogParams){
  
  Log.Message("My Exception info", Window.Win("TextBox"," ").Text;)
  
}