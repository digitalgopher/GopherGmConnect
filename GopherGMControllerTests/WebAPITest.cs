using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using GopherGmConnect;
using System.Web.Http;
using System.IO;

namespace GopherGmConnect.Tests
{
    [TestClass]
    public class WebAPITest
    {
        [TestMethod]
        public void PlayerSearch()
        {
            var controller = new GopherGmConnect.Controllers.GopherController();
            var list = controller.Players("330") as GopherGmConnect.Models.Player;
            Assert.AreEqual(list.LastName, "Datsyuk");
        }
    }
}
