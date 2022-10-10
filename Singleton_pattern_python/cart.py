class Cart:
    items = []
    def __new__(cls):
        if not hasattr(cls, 'instance'):
            cls.instance = super(Cart, cls).__new__(cls)
        return cls.instance
    
    def __str__(self):
        return str(self.items)
    
    def add_item(self, item: str):
        self.items.append(item)