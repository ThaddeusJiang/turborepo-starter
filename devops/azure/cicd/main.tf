# We strongly recommend using the required_providers block to set the
# Azure Provider source and version being used
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=3.0.0"
    }
  }
}

# Configure the Microsoft Azure Provider
provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "test" {
  name     = "turbo-test"
  location = "Japan East"
}

resource "azurerm_service_plan" "test" {
  name                = "turbo-test"
  resource_group_name = azurerm_resource_group.test.name
  location            = azurerm_resource_group.test.location
  os_type             = "Linux"
  sku_name            = "P1v2"
}

resource "azurerm_linux_web_app" "test" {
  name                = "turbo-test"
  resource_group_name = azurerm_resource_group.test.name
  location            = azurerm_resource_group.test.location
  service_plan_id     = azurerm_service_plan.test.id

  site_config {
    application_stack {
      docker_image     = "surrealdb/surrealdb"
      docker_image_tag = "latest"
    }

  }

}
